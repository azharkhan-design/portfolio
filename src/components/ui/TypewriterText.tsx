import React, { useState, useEffect, useRef, useCallback } from 'react';

export type TypewriterSequenceItem =
  | { type: 'phrase'; text: string; duration?: number }
  | {
      type: 'rotating-slot';
      prefix: string;
      suffix: string;
      slots: string[];
      slotDuration?: number;
    };

export interface TypewriterTextProps {
  phrases?: string[];
  sequence?: TypewriterSequenceItem[];
  duration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  sequence,
  duration = 3400,
  className = ''
}) => {
  const items: TypewriterSequenceItem[] =
    sequence && sequence.length > 0
      ? sequence
      : (
          phrases || [
            'I Research + I Design + I Lead',
            'I Architect Enterprise SaaS Platforms',
            'I Build Scalable Design Systems',
            'I Turn Complexity into Simple Clarity'
          ]
        ).map((text) => ({ type: 'phrase', text }));

  const [itemIndex, setItemIndex] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);
  const [lineStage, setLineStage] = useState<'entering' | 'active' | 'exiting'>('active');
  const [slotStage, setSlotStage] = useState<'entering' | 'active' | 'exiting'>('active');
  const [slotWidths, setSlotWidths] = useState<Record<string, number>>({});

  const currentItem = items[itemIndex % items.length];

  // Recalculate slot widths on window resize for responsive accuracy
  const measureContainerRef = useRef<HTMLSpanElement | null>(null);

  const measureAllSlots = useCallback(() => {
    if (!measureContainerRef.current) return;
    const spans = measureContainerRef.current.querySelectorAll<HTMLSpanElement>('[data-slot-name]');
    const newWidths: Record<string, number> = {};
    spans.forEach((span) => {
      const name = span.getAttribute('data-slot-name');
      if (name) {
        // Add 2px subpixel buffer
        newWidths[name] = Math.ceil(span.getBoundingClientRect().width) + 2;
      }
    });
    setSlotWidths(newWidths);
  }, []);

  useEffect(() => {
    measureAllSlots();
    window.addEventListener('resize', measureAllSlots);
    return () => window.removeEventListener('resize', measureAllSlots);
  }, [measureAllSlots, currentItem]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (currentItem.type === 'phrase') {
      if (lineStage === 'active') {
        timeout = setTimeout(() => {
          setLineStage('exiting');
        }, currentItem.duration || duration);
      } else if (lineStage === 'exiting') {
        timeout = setTimeout(() => {
          setItemIndex((prev) => (prev + 1) % items.length);
          setSlotIndex(0);
          setLineStage('entering');
          setSlotStage('active');
        }, 450);
      } else if (lineStage === 'entering') {
        timeout = setTimeout(() => {
          setLineStage('active');
        }, 50);
      }
    } else if (currentItem.type === 'rotating-slot') {
      if (lineStage === 'entering') {
        timeout = setTimeout(() => {
          setLineStage('active');
        }, 50);
      } else if (lineStage === 'exiting') {
        timeout = setTimeout(() => {
          setItemIndex((prev) => (prev + 1) % items.length);
          setSlotIndex(0);
          setLineStage('entering');
          setSlotStage('active');
        }, 450);
      } else if (lineStage === 'active') {
        if (slotStage === 'active') {
          const slotDur = currentItem.slotDuration || 2200;
          timeout = setTimeout(() => {
            if (slotIndex >= currentItem.slots.length - 1) {
              // Last domain complete: animate out whole line
              setLineStage('exiting');
            } else {
              // Animate out only the slot
              setSlotStage('exiting');
            }
          }, slotDur);
        } else if (slotStage === 'exiting') {
          timeout = setTimeout(() => {
            setSlotIndex((prev) => prev + 1);
            setSlotStage('entering');
          }, 320);
        } else if (slotStage === 'entering') {
          timeout = setTimeout(() => {
            setSlotStage('active');
          }, 50);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [items.length, itemIndex, slotIndex, lineStage, slotStage, currentItem, duration]);

  const activeSlotName = currentItem.type === 'rotating-slot' ? currentItem.slots[slotIndex] : '';
  const currentSlotWidth = activeSlotName && slotWidths[activeSlotName] ? slotWidths[activeSlotName] : undefined;

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden min-h-[3.2rem] sm:min-h-[4rem] px-2 select-none ${className}`}>
      {/* Hidden off-screen measurement probe for exact responsive typography */}
      <span
        ref={measureContainerRef}
        className="invisible fixed -top-[9999px] -left-[9999px] pointer-events-none whitespace-nowrap font-display font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl"
        aria-hidden="true"
      >
        {currentItem.type === 'rotating-slot' &&
          currentItem.slots.map((slot) => (
            <span key={slot} data-slot-name={slot} className="inline-block px-0.5">
              {slot}
            </span>
          ))}
      </span>

      <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-center">
        {currentItem.type === 'phrase' ? (
          currentItem.text.split(' ').map((word, wordIdx) => {
            const isPlus = word === '+';
            const isExiting = lineStage === 'exiting';
            const isEntering = lineStage === 'entering';
            const delay = isExiting ? wordIdx * 25 : wordIdx * 35;

            return (
              <span
                key={`phrase-${itemIndex}-${wordIdx}`}
                className="inline-block transform-gpu transition-all"
                style={{
                  opacity: isExiting || isEntering ? 0 : 1,
                  filter: isExiting || isEntering ? 'blur(8px)' : 'blur(0px)',
                  transform: isExiting
                    ? 'translateY(-24px) scale(0.95)'
                    : isEntering
                    ? 'translateY(24px) scale(0.95)'
                    : 'translateY(0) scale(1)',
                  transitionDuration: '550ms',
                  transitionDelay: `${delay}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  className={`font-display font-semibold tracking-tight ${
                    isPlus ? 'text-neutral-400 dark:text-neutral-500 font-normal px-0.5' : 'text-primary'
                  }`}
                >
                  {word}
                </span>
              </span>
            );
          })
        ) : (
          <>
            {/* Static Prefix: "I Architect" (Anchored in place; only animates on line enter/exit) */}
            {currentItem.prefix.split(' ').map((word, wordIdx) => {
              const isExiting = lineStage === 'exiting';
              const isEntering = lineStage === 'entering';
              const delay = isExiting ? wordIdx * 25 : wordIdx * 35;

              return (
                <span
                  key={`prefix-${wordIdx}`}
                  className="inline-block transform-gpu transition-all"
                  style={{
                    opacity: isExiting || isEntering ? 0 : 1,
                    filter: isExiting || isEntering ? 'blur(8px)' : 'blur(0px)',
                    transform: isExiting
                      ? 'translateY(-24px) scale(0.95)'
                      : isEntering
                      ? 'translateY(24px) scale(0.95)'
                      : 'translateY(0) scale(1)',
                    transitionDuration: '550ms',
                    transitionDelay: `${delay}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span className="font-display font-semibold tracking-tight text-primary">
                    {word}
                  </span>
                </span>
              );
            })}

            {/* Smooth Width-Morphing Slot Container with 3D Kinetic Roll Shuffle */}
            <span
              className="relative inline-flex items-center justify-center overflow-hidden align-baseline transition-[width] duration-450 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: currentSlotWidth ? `${currentSlotWidth}px` : 'auto',
                perspective: '600px',
              }}
            >
              <span
                key={`slot-${slotIndex}`}
                className="inline-block transform-gpu transition-all whitespace-nowrap"
                style={{
                  opacity:
                    lineStage === 'exiting' || lineStage === 'entering' || slotStage === 'exiting' || slotStage === 'entering'
                      ? 0
                      : 1,
                  filter:
                    lineStage === 'exiting' || lineStage === 'entering'
                      ? 'blur(8px)'
                      : slotStage === 'exiting' || slotStage === 'entering'
                      ? 'blur(5px)'
                      : 'blur(0px)',
                  transform:
                    lineStage === 'exiting'
                      ? 'translateY(-24px) scale(0.95)'
                      : lineStage === 'entering'
                      ? 'translateY(24px) scale(0.95)'
                      : slotStage === 'exiting'
                      ? 'translateY(-115%) rotateX(24deg) scale(0.95)'
                      : slotStage === 'entering'
                      ? 'translateY(115%) rotateX(-24deg) scale(0.95)'
                      : 'translateY(0) rotateX(0deg) scale(1)',
                  transitionDuration: lineStage === 'active' ? '400ms' : '550ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transformOrigin: '50% 50%',
                }}
              >
                <span className="font-display font-semibold tracking-tight text-[#92D0AB]">
                  {currentItem.slots[slotIndex]}
                </span>
              </span>
            </span>

            {/* Static Suffix: "Platforms" (Smoothly glides left/right as slot width morphs) */}
            {currentItem.suffix.split(' ').map((word, wordIdx) => {
              const isExiting = lineStage === 'exiting';
              const isEntering = lineStage === 'entering';
              const delay = isExiting ? (wordIdx + 3) * 25 : (wordIdx + 3) * 35;

              return (
                <span
                  key={`suffix-${wordIdx}`}
                  className="inline-block transform-gpu transition-all"
                  style={{
                    opacity: isExiting || isEntering ? 0 : 1,
                    filter: isExiting || isEntering ? 'blur(8px)' : 'blur(0px)',
                    transform: isExiting
                      ? 'translateY(-24px) scale(0.95)'
                      : isEntering
                      ? 'translateY(24px) scale(0.95)'
                      : 'translateY(0) scale(1)',
                    transitionDuration: '550ms',
                    transitionDelay: `${delay}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span className="font-display font-semibold tracking-tight text-primary">
                    {word}
                  </span>
                </span>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
