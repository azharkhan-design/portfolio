import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  colors?: string[];
  transitionSpeed?: number;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

const parseColorToRGB = (colorStr: string): [number, number, number] => {
  if (colorStr.startsWith('#')) {
    const hex = colorStr.replace('#', '');
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16),
      ];
    }
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }

  if (typeof window !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = colorStr;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return [r, g, b];
    }
  }

  return [146, 208, 171];
};

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 5,
  flickerChance = 0.3,
  color = '#92D0AB',
  colors,
  transitionSpeed = 0.25,
  width,
  height,
  className = '',
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Parse color palette into RGB tuples
  const rgbStops = useMemo(() => {
    const list = colors && colors.length > 0 ? colors : [color];
    return list.map(parseColorToRGB);
  }, [colors, color]);

  const setupGrid = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.floor(width / (squareSize + gridGap));
      const rows = Math.floor(height / (squareSize + gridGap));
      const squares = new Float32Array(cols * rows);

      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
      elapsedTime: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      const numStops = rgbStops.length;
      const stepDist = (squareSize + gridGap) * dpr;
      const sqSize = squareSize * dpr;

      // Pre-compute column colors with smooth gradient flow
      const colColors: string[] = new Array(cols);

      if (numStops === 1) {
        const c = rgbStops[0];
        const prefix = `rgba(${c[0]}, ${c[1]}, ${c[2]}, `;
        colColors.fill(prefix);
      } else {
        const basePhase = elapsedTime * transitionSpeed;
        for (let c = 0; c < cols; c++) {
          // Add subtle spatial phase wave across the width
          let colPhase = (basePhase + (c / cols) * 0.35) % numStops;
          if (colPhase < 0) colPhase += numStops;

          const idx1 = Math.floor(colPhase);
          const idx2 = (idx1 + 1) % numStops;
          const subProgress = colPhase - idx1;

          // Smooth cosine interpolation for seamless organic color morph
          const ease = (1 - Math.cos(subProgress * Math.PI)) / 2;

          const c1 = rgbStops[idx1];
          const c2 = rgbStops[idx2];

          const r = Math.round(c1[0] + (c2[0] - c1[0]) * ease);
          const g = Math.round(c1[1] + (c2[1] - c1[1]) * ease);
          const b = Math.round(c1[2] + (c2[2] - c1[2]) * ease);

          colColors[c] = `rgba(${r}, ${g}, ${b}, `;
        }
      }

      // Draw all pixels
      for (let c = 0; c < cols; c++) {
        const colorPrefix = colColors[c];
        const xPos = c * stepDist;

        for (let r = 0; r < rows; r++) {
          const opacity = squares[c * rows + r];
          if (opacity <= 0.01) continue;

          ctx.fillStyle = `${colorPrefix}${opacity})`;
          ctx.fillRect(xPos, r * stepDist, sqSize, sqSize);
        }
      }
    },
    [rgbStops, squareSize, gridGap, transitionSpeed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let gridData: ReturnType<typeof setupGrid>;

    const handleResize = () => {
      const w = width || container.clientWidth;
      const h = height || container.clientHeight;
      setCanvasSize({ width: w, height: h });
      gridData = setupGrid(canvas, w, h);
    };

    handleResize();

    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = (time: number) => {
      if (!isInView) return;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      const elapsedSeconds = (time - startTime) / 1000;

      if (gridData) {
        updateSquares(gridData.squares, deltaTime);
        drawGrid(
          ctx,
          canvas.width,
          canvas.height,
          gridData.cols,
          gridData.rows,
          gridData.squares,
          gridData.dpr,
          elapsedSeconds
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupGrid, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div ref={containerRef} className={`h-full w-full ${className}`} {...props}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none block"
        style={{ width: canvasSize.width, height: canvasSize.height }}
      />
    </div>
  );
};

export default FlickeringGrid;
