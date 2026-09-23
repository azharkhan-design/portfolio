import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';

export const DesignSystemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'data-grid' | 'dashboard'>('components');
  const [inputValue, setInputValue] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('option-1');
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const tabs = [
    { id: 'components', label: '01 · Interactive Components' },
    { id: 'tokens', label: '02 · Tokens & Typography' },
    { id: 'data-grid', label: '03 · Enterprise Data Grid' },
    { id: 'dashboard', label: '04 · Composite Metric Widgets' }
  ];

  return (
    <section id="design-systems" className="py-20 md:py-28 border-b border-subtle bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FOUNDATIONS & ARCHITECTURE"
          title="DESIGN SYSTEMS"
          subtitle="Building scalable visual languages that create consistency across products, teams and platforms."
          description="From brand guidelines to production-ready components. Architecting multi-tier design systems that align Figma libraries, design tokens, and React component codebases across multi-tenant enterprise applications."
          className="mb-6 sm:mb-7"
        />

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 border-b border-subtle pb-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-xs'
                  : 'bg-surface text-secondary hover:text-primary hover:bg-badge border border-subtle'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Interactive Components */}
        {activeTab === 'components' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons Showcase */}
            <div className="bg-surface p-6 rounded-sm border border-subtle flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Button Variants</div>
                <h4 className="text-sm font-semibold text-primary mb-4 font-display">Stateful Button Tokens</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-black rounded-none hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer">
                      Primary Action
                    </button>
                    <span className="text-[10px] font-mono text-muted">Filled solid</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 text-xs font-medium bg-transparent text-primary border border-default hover:border-strong rounded-none transition-all cursor-pointer">
                      Secondary Outline
                    </button>
                    <span className="text-[10px] font-mono text-muted">1px Border</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 text-xs font-medium bg-badge text-secondary hover:text-primary rounded-none transition-all cursor-pointer">
                      Subtle Ghost
                    </button>
                    <span className="text-[10px] font-mono text-muted">Background tint</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button disabled className="px-4 py-2 text-xs font-medium bg-badge text-muted opacity-50 cursor-not-allowed rounded-none">
                      Disabled State
                    </button>
                    <span className="text-[10px] font-mono text-muted">Pointer none</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-subtle text-[11px] font-mono text-muted">
                Tokens: <code className="text-primary">btn-primary</code>, <code className="text-primary">btn-outline</code>
              </div>
            </div>

            {/* Form Inputs Showcase */}
            <div className="bg-surface p-6 rounded-sm border border-subtle flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Form Controls</div>
                <h4 className="text-sm font-semibold text-primary mb-4 font-display">Inputs, Radios &amp; Switches</h4>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-secondary mb-1">
                      Text Input Field
                    </label>
                    <input
                      type="text"
                      placeholder="Type something..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-surface border border-subtle focus:border-strong focus:outline-none transition-colors text-primary"
                    />
                  </div>

                  {/* Radio Group */}
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="demo-radio"
                        checked={selectedRadio === 'option-1'}
                        onChange={() => setSelectedRadio('option-1')}
                        className="accent-primary cursor-pointer"
                      />
                      <span className="text-secondary">Standard</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="demo-radio"
                        checked={selectedRadio === 'option-2'}
                        onChange={() => setSelectedRadio('option-2')}
                        className="accent-primary cursor-pointer"
                      />
                      <span className="text-secondary">Express</span>
                    </label>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-center gap-2 text-xs text-secondary cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                      className="accent-primary cursor-pointer"
                    />
                    <span>Notify upon task completion</span>
                  </label>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-subtle text-[11px] font-mono text-muted">
                Validation: <span className="text-emerald-600 dark:text-emerald-400">Strict Type Safety</span>
              </div>
            </div>

            {/* Semantic Badges & Pills */}
            <div className="bg-surface p-6 rounded-sm border border-subtle flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Status Taxonomy</div>
                <h4 className="text-sm font-semibold text-primary mb-4 font-display">Semantic Status Tokens</h4>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-2 bg-badge/40 rounded border border-subtle">
                    <Tag variant="accent" size="sm">Active / Verified</Tag>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">● 100% Online</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-badge/40 rounded border border-subtle">
                    <Tag variant="default" size="sm">Under Review</Tag>
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">▲ Queue: 12</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-badge/40 rounded border border-subtle">
                    <Tag variant="subtle" size="sm">Archived Record</Tag>
                    <span className="text-[10px] font-mono text-muted">Read Only</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-badge/40 rounded border border-subtle">
                    <Tag variant="mono" size="sm">API v2.4.0</Tag>
                    <span className="text-[10px] font-mono text-secondary">Token Valid</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-subtle text-[11px] font-mono text-muted">
                Standards: WCAG 2.1 AAA Contrast
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tokens & Typography */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Typographic Scale */}
            <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-sm border border-subtle">
              <div className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Typography Scale</div>
              <h4 className="text-base font-semibold text-primary mb-6 font-display">Inter &amp; Plus Jakarta Sans Hierarchy</h4>

              <div className="space-y-6 border-t border-subtle pt-6">
                <div>
                  <div className="text-[10px] font-mono text-muted uppercase">Display Large · 48px / Tight Leading</div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight mt-1">
                    Scalable Enterprise Design
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-muted uppercase">Heading 2 · 24px / Bold</div>
                  <div className="text-xl font-display font-bold text-primary tracking-tight mt-1">
                    Predictable Micro-Interactions &amp; Layout Rhythm
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-muted uppercase">Body Text · 15px / Regular 1.6 Line-Height</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed mt-1 max-w-2xl">
                    Every token is grounded in an 8pt spatial grid with optical sub-pixel adjustments, ensuring frictionless rendering across retina desktop monitors and high-DPI mobile touchscreens.
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-muted uppercase">Micro-Label · 11px / Monospace Uppercase Tracking 0.2em</div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold mt-1">
                    STATUS_ACTIVE_SESSION_VERIFIED
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Tokens */}
            <div className="lg:col-span-5 bg-surface p-6 sm:p-8 rounded-sm border border-subtle flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted mb-1">Color Palette Tokens</div>
                <h4 className="text-base font-semibold text-primary mb-6 font-display">Monochrome &amp; Semantic Values</h4>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-neutral-900 text-white rounded-xs">
                    <span>--text-primary (Obsidian)</span>
                    <span className="text-[10px] opacity-75">#0A0A0A</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-neutral-600 text-white rounded-xs">
                    <span>--text-secondary (Slate)</span>
                    <span className="text-[10px] opacity-75">#52525B</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-neutral-200 text-neutral-800 rounded-xs">
                    <span>--border-subtle (Zinc-200)</span>
                    <span className="text-[10px] opacity-75">#E4E4E7</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white text-neutral-900 border border-subtle rounded-xs">
                    <span>--bg-primary (Pure White)</span>
                    <span className="text-[10px] opacity-75">#FFFFFF</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-emerald-600 text-white rounded-xs">
                    <span>--status-success</span>
                    <span className="text-[10px] opacity-75">#10B981</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-subtle text-xs font-mono text-muted">
                CSS Variable Architecture: Fully Theme Agnostic
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Enterprise Data Grid */}
        {activeTab === 'data-grid' && (
          <div className="bg-surface p-6 rounded-sm border border-subtle overflow-x-auto">
            <div className="flex items-center justify-between pb-4 border-b border-subtle mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">Component: DataGrid Pro</span>
                <h4 className="text-sm font-semibold text-primary font-display mt-0.5">High-Density Multi-Column Roster</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-1 bg-badge rounded border border-subtle text-secondary">
                  Showing 4 of 1,280 Rows
                </span>
              </div>
            </div>

            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-subtle bg-badge/50 text-muted uppercase text-[10px] tracking-wider">
                  <th className="py-2.5 px-3">Record ID</th>
                  <th className="py-2.5 px-3">Service Module</th>
                  <th className="py-2.5 px-3">Primary Assignee</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Throughput</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                <tr className="hover:bg-badge/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-primary">#BLS-9421</td>
                  <td className="py-3 px-3 text-secondary">Patent Claim Translation (DE/EN)</td>
                  <td className="py-3 px-3 text-primary">Dr. Marcus Vance</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ● Active SLA
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-primary">12.4k w/hr</td>
                </tr>
                <tr className="hover:bg-badge/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-primary">#SAAL-7712</td>
                  <td className="py-3 px-3 text-secondary">Federal Permitting AI Pipeline</td>
                  <td className="py-3 px-3 text-primary">Fatima Al-Hashemi</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ● Verified
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-primary">4.2 min avg</td>
                </tr>
                <tr className="hover:bg-badge/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-primary">#GULF-1804</td>
                  <td className="py-3 px-3 text-secondary">GCC Multi-Entity WPS Payroll Run</td>
                  <td className="py-3 px-3 text-primary">Finance Ops Lead</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      ▲ In Review
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-primary">AED 4.8M</td>
                </tr>
                <tr className="hover:bg-badge/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-primary">#CURA-5591</td>
                  <td className="py-3 px-3 text-secondary">Telehealth Clinical SOAP Intake</td>
                  <td className="py-3 px-3 text-primary">Dr. Sarah Lin, MD</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ● Encrypted
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-primary">100% HIPAA</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: Composite Metric Widgets */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-sm border border-subtle">
              <div className="text-[10px] font-mono text-muted uppercase">Ecosystem Velocity</div>
              <div className="text-2xl font-bold font-display text-primary mt-2">15+ Years</div>
              <p className="text-xs text-secondary mt-1">Design system consistency</p>
              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-600 dark:text-emerald-400">↑ 3x Speedup</span>
                <span className="text-muted">Engineering Sprint</span>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-sm border border-subtle">
              <div className="text-[10px] font-mono text-muted uppercase">Component Library</div>
              <div className="text-2xl font-bold font-display text-primary mt-2">40+ Tokens</div>
              <p className="text-xs text-secondary mt-1">Atomic to complex patterns</p>
              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[10px] font-mono">
                <span className="text-primary font-medium">React + Figma</span>
                <span className="text-muted">100% Synced</span>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-sm border border-subtle">
              <div className="text-[10px] font-mono text-muted uppercase">Global Client Markets</div>
              <div className="text-2xl font-bold font-display text-primary mt-2">US · UAE · IN</div>
              <p className="text-xs text-secondary mt-1">Multi-regional compliance</p>
              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-600 dark:text-emerald-400">● RTL/LTR Ready</span>
                <span className="text-muted">Arabic / English</span>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-sm border border-subtle">
              <div className="text-[10px] font-mono text-muted uppercase">Accessibility</div>
              <div className="text-2xl font-bold font-display text-primary mt-2">WCAG AA+</div>
              <p className="text-xs text-secondary mt-1">Zero contrast compromise</p>
              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-600 dark:text-emerald-400">100% Pass</span>
                <span className="text-muted">Audited</span>
              </div>
            </div>
          </div>
        )}

        {/* Small Bottom Tagline */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            From brand guidelines to production-ready components.
          </p>
        </div>
      </div>
    </section>
  );
};
