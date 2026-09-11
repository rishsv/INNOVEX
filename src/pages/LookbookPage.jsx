import React, { useState, useEffect } from 'react';

export function LookbookPage({ onSelectProduct, onNavigateCategory }) {
  const [countdown, setCountdown] = useState({ hours: 7, mins: 42, secs: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div class="flex flex-col w-full">
      {/* Editorial Hero Banner */}
      <section class="relative w-full overflow-hidden bg-surface-container-high">
        <div class="relative h-[85vh] min-h-[600px] w-full flex items-end pb-16 lg:pb-24">
          <div 
            class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDikzNQIbFPIUfcIqLMNiAbAu4gMZZbpW0DoJMpFa-VaPWoHu5AAthpJ6m6ctpFqgLc0TX8gbvF_iLFXi9bA2aPHDpX2mGmcQPEFxJWLlloQyFmvFq9UiKGGMGPZbSc-SLLhehPyH5BCUfvHR-T1Yl23IWSzsmY3GuPZbvE6mtMPFYEt9NkkM01F3wcgRkVkpLvYpGyImEl1EGHWS6edM3-tYvL-B3PCQ1Szp4cA-zp1-N2xIBP7pj1-w')" }}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-on-background/85 via-on-background/35 to-transparent"></div>
          <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-end">
            <div class="max-w-2xl space-y-6">
              <div class="inline-flex items-center gap-3 px-3 py-1.5 bg-surface/90 backdrop-blur-md text-on-surface shadow-sm w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span class="font-label text-label-sm uppercase tracking-widest text-primary font-semibold text-[11px]">Volume IV • The Summer Solstice Collection 2025</span>
              </div>
              <div class="space-y-2">
                <p class="font-label text-label-lg text-inverse-primary tracking-widest uppercase text-sm">Maison INNOVEX Édition Limitée</p>
                <h1 class="font-headline text-5xl md:text-6xl text-on-primary font-normal leading-tight tracking-tight">
                  L’Été INNOVEX <span class="italic font-light opacity-90 text-secondary-fixed">2025</span>
                </h1>
              </div>
              <p class="font-body text-body-lg text-inverse-on-surface/90 max-w-lg leading-relaxed">
                Fluid hand-loomed mulberry silks, sculptural ecru linen tailoring, and architectural drape designed for transcendent warm-season soirees.
              </p>
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={onNavigateCategory}
                  class="bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label text-label-md uppercase tracking-widest transition-all shadow-md font-semibold"
                >
                  Shop The Look
                </button>
                <button 
                  onClick={onSelectProduct}
                  class="inline-flex items-center justify-center px-8 py-3.5 bg-surface/15 hover:bg-surface/30 backdrop-blur-md text-on-primary font-label text-label-md uppercase tracking-widest transition-all"
                >
                  Examine Aurelia Silk (PDP)
                </button>
              </div>
            </div>

            <div class="mt-12 pt-6 flex items-center justify-between text-on-primary border-t border-on-primary/20">
              <div class="flex items-center gap-3">
                <button class="w-8 h-1 bg-surface"></button>
                <button class="w-8 h-1 bg-surface/30"></button>
                <button class="w-8 h-1 bg-surface/30"></button>
                <span class="ml-4 font-label text-label-sm tracking-widest uppercase opacity-80 text-xs">Lookbook 01 / 03</span>
              </div>
              <div class="hidden sm:flex items-center gap-6 font-label text-label-sm tracking-widest uppercase opacity-80 text-xs">
                <span>Savoir-Faire Paris</span>
                <span>•</span>
                <span>Worldwide Courier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Trust Bar */}
      <section class="w-full bg-surface-container-low py-6 shadow-sm">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-on-surface">
          <div class="flex items-center gap-3.5">
            <span class="material-symbols-outlined text-primary text-[24px]">eco</span>
            <div>
              <span class="block font-label text-label-md uppercase tracking-wider font-semibold text-on-surface text-xs">Sustainable Fibers</span>
              <span class="block font-body text-body-sm text-on-surface-variant text-xs">100% Certified Organic</span>
            </div>
          </div>
          <div class="flex items-center gap-3.5">
            <span class="material-symbols-outlined text-primary text-[24px]">all_inclusive</span>
            <div>
              <span class="block font-label text-label-md uppercase tracking-wider font-semibold text-on-surface text-xs">Carbon-Neutral</span>
              <span class="block font-body text-body-sm text-on-surface-variant text-xs">Eco-compensated dispatch</span>
            </div>
          </div>
          <div class="flex items-center gap-3.5">
            <span class="material-symbols-outlined text-primary text-[24px]">straighten</span>
            <div>
              <span class="block font-label text-label-md uppercase tracking-wider font-semibold text-on-surface text-xs">Bespoke Fitting</span>
              <span class="block font-body text-body-sm text-on-surface-variant text-xs">Atelier alterations</span>
            </div>
          </div>
          <div class="flex items-center gap-3.5">
            <span class="material-symbols-outlined text-primary text-[24px]">loyalty</span>
            <div>
              <span class="block font-label text-label-md uppercase tracking-wider font-semibold text-on-surface text-xs">White Glove Courier</span>
              <span class="block font-body text-body-sm text-on-surface-variant text-xs">Secured door delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Portfolios Grid */}
      <section class="w-full py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div class="space-y-2">
            <span class="font-label text-label-sm uppercase tracking-widest text-secondary font-semibold">Seasonal Curations</span>
            <h2 class="font-headline text-headline-lg text-on-surface text-3xl font-normal">Curated Portfolios</h2>
          </div>
          <button 
            onClick={onNavigateCategory}
            class="mt-4 md:mt-0 font-label text-label-md uppercase tracking-widest text-primary hover:text-primary-container inline-flex items-center gap-2 font-semibold"
          >
            <span>View Full Catalog Index</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div 
            onClick={onNavigateCategory}
            class="md:col-span-7 group relative overflow-hidden bg-surface-container aspect-[16/10] flex flex-col justify-end p-8 shadow-sm cursor-pointer"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo3-HJo86UJetnss10iApBqkxBCfpkdlO8sunalRLRg8PeBqo8pGQhDi1u7LZF-gE6JDqBjgWeUVPau_n5HBFHWqfsAn36VJk5wwVKgbZtybB3eMkKs_juH0E4FtSjeVXOI1z-p7Tyc0jqoxh6i_cyICDfPkrGhHq74jWC1VK5BEtiQthtbZeu9nvFyEQBTD1k9GYNdiSoL5M9dSmDDUoLqFAxOvNJH3Y0R7ixegEVi83x2b70JI8nZw')" }}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
            <div class="relative z-10 text-on-primary space-y-2">
              <span class="font-label text-label-sm uppercase tracking-widest text-secondary-fixed text-xs">Atelier Exclusive</span>
              <h3 class="font-headline text-headline-md text-2xl">Occasion & Evening Gowns</h3>
              <p class="font-body text-body-sm text-inverse-on-surface/80 max-w-md">Sculpted silhouettes handcrafted in Como silk and featherlight French lace.</p>
              <span class="inline-flex items-center gap-1 font-label text-label-sm tracking-widest uppercase text-on-primary pt-2 underline underline-offset-4 text-xs font-semibold">Discover 28 Silhouettes</span>
            </div>
          </div>

          <div 
            onClick={onNavigateCategory}
            class="md:col-span-5 group relative overflow-hidden bg-surface-container aspect-[16/10] md:aspect-auto flex flex-col justify-end p-8 shadow-sm cursor-pointer"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUaLdMfFqoldCPNT63Q4N-I7TaqVZflZxyc5ZA6i_SMdXn5ww30Q5Qx9CUyTLsIeorDfzWF_e7AgXYUvC7zgEQnWMHEcjK3RuykBYTm1nhLjG5d1cNCGr8CMcXc9gkVdQvsrHa6bXT2zVthihxHGUgZ29x28-fzLMYT4SkXZJekDAjAXQN6jOwc-7FF51h_Ls5kUPTko2JVgmAbwMwmbhJQlc7wo1XwdrFZpCN_Tvhb8I5z5TnRisuPg')" }}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
            <div class="relative z-10 text-on-primary space-y-2">
              <span class="font-label text-label-sm uppercase tracking-widest text-secondary-fixed text-xs">Daily Elegance</span>
              <h3 class="font-headline text-headline-md text-2xl">Casual Dresses</h3>
              <p class="font-body text-body-sm text-inverse-on-surface/80">Breathable Irish flax and relaxed A-line silhouettes.</p>
              <span class="inline-flex items-center gap-1 font-label text-label-sm tracking-widest uppercase text-on-primary pt-2 underline underline-offset-4 text-xs font-semibold">Discover 19 Silhouettes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Archival Flash Sale Banner */}
      <section class="w-full bg-primary text-on-primary py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 bg-on-primary/10 px-3 py-1">
                <span class="material-symbols-outlined text-[16px] text-secondary-fixed">timer</span>
                <span class="font-label text-label-sm tracking-widest uppercase text-secondary-fixed font-semibold text-xs">The Vault Archive • Strictly Limited Edition</span>
              </div>
              <div class="space-y-3">
                <h2 class="font-headline text-headline-lg text-on-primary text-4xl font-normal">
                  Private Salon Archival Release
                </h2>
                <p class="font-body text-body-lg text-inverse-primary max-w-xl">
                  Deaccessioned couture pieces and hand-finished prototype gowns from the INNOVEX 2024 Retrospective. Only 14 garments remain in the INNOVEX Private Reserve.
                </p>
              </div>

              {/* Live Timer */}
              <div class="flex items-center gap-4 pt-2">
                <div class="bg-surface-container-lowest/10 backdrop-blur-sm p-4 text-center min-w-[76px]">
                  <span class="block font-headline text-3xl font-bold text-on-primary">{String(countdown.hours).padStart(2, '0')}</span>
                  <span class="block font-label text-label-sm tracking-widest uppercase opacity-75 text-[10px]">Hours</span>
                </div>
                <span class="font-headline text-2xl opacity-60">:</span>
                <div class="bg-surface-container-lowest/10 backdrop-blur-sm p-4 text-center min-w-[76px]">
                  <span class="block font-headline text-3xl font-bold text-on-primary">{String(countdown.mins).padStart(2, '0')}</span>
                  <span class="font-label text-label-sm tracking-widest uppercase opacity-75 text-[10px]">Mins</span>
                </div>
                <span class="font-headline text-2xl opacity-60">:</span>
                <div class="bg-surface-container-lowest/10 backdrop-blur-sm p-4 text-center min-w-[76px]">
                  <span class="block font-headline text-3xl font-bold text-on-primary">{String(countdown.secs).padStart(2, '0')}</span>
                  <span class="font-label text-label-sm tracking-widest uppercase opacity-75 text-[10px]">Secs</span>
                </div>
                <div class="ml-4 pl-4 border-l border-outline-variant/30 hidden sm:block">
                  <span class="block font-label text-label-md uppercase tracking-wider text-secondary-fixed font-semibold text-xs">Stock Verification</span>
                  <span class="block font-body text-body-sm text-inverse-primary text-xs">Live Vault Allocation Status: 82% Claimed</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 bg-surface text-on-surface p-6 shadow-xl flex flex-col gap-6">
              <div class="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
                <div 
                  class="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBH0HEg01VcSIE8SCArvDLeyGbTuy5gszDYhEXYC1mjyZxlfrAH7Qx6IFslx7PUQS0fKjNVmeiznYXAGAPdvgub-8qBVH_wyJNRokQKib6IL7mzl7gTcemkEHYjlk5WQr_l68mGm1dXC2YBG6qtg_QOhKhlgv7iklYniQHmkgCvioj5578Ff_zJAk6b-vD0_bxfOpxUX0E8GyR5zPbYh6w_JYdyKzQ-IEs1OgAtizmMxUl2UxVD5orQcQ')" }}
                />
                <div class="absolute top-3 left-3 bg-secondary text-on-secondary px-2.5 py-1 font-label text-label-sm uppercase tracking-widest font-semibold text-xs">
                  Archive No. 04/14
                </div>
              </div>
              <div class="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-label text-label-sm uppercase tracking-widest text-outline text-xs">INNOVEX Haute Tailoring</span>
                    <span class="font-label text-label-sm uppercase tracking-wider text-error font-semibold text-xs">4 Units Available</span>
                  </div>
                  <h3 class="font-headline text-xl text-on-surface mt-1">Le Smoking Satin-Lapel Wool Tuxedo</h3>
                  <div class="flex items-baseline gap-3 mt-2">
                    <span class="font-title text-xl font-bold text-primary">$890</span>
                    <span class="font-body text-body-md text-outline line-through">$1,750</span>
                    <span class="font-label text-label-sm text-secondary uppercase font-semibold text-xs">Save 49%</span>
                  </div>
                </div>
                <button 
                  onClick={onNavigateCategory}
                  class="w-full bg-on-surface hover:bg-primary text-surface font-label text-label-md uppercase tracking-widest py-3.5 transition-colors text-center font-semibold"
                >
                  Claim Archival Piece
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
