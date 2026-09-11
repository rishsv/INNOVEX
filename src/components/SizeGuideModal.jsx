import React from 'react';

export function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div class="fixed inset-0 bg-on-background/60 backdrop-blur-sm" onClick={onClose}></div>
      <div class="relative bg-surface max-w-2xl w-full p-8 shadow-2xl z-10 border border-outline-variant space-y-6">
        <div class="flex justify-between items-start border-b border-surface-variant pb-4">
          <div>
            <span class="font-label text-label-sm text-secondary uppercase tracking-widest font-semibold">Atelier Precision</span>
            <h3 class="font-headline text-headline-sm text-on-surface text-2xl">Bespoke Size & Fit Guide</h3>
          </div>
          <button onClick={onClose} class="text-on-surface hover:text-primary">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <p class="font-body text-body-md text-on-surface-variant leading-relaxed">
          INNOVEX garments are cut according to Haute Couture French Sizing (FR). For bias-cut silk dresses, choose your natural bust size — diagonal tension allows fluid adaptation over hip curves.
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-left font-body text-body-sm border-collapse">
            <thead>
              <tr class="bg-surface-container-low font-label text-label-sm uppercase tracking-wider text-on-surface">
                <th class="p-3">INNOVEX Size</th>
                <th class="p-3">FR / EU</th>
                <th class="p-3">Bust (cm)</th>
                <th class="p-3">Waist (cm)</th>
                <th class="p-3">Low Hip (cm)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-variant">
              <tr>
                <td class="p-3 font-semibold text-primary">XS</td>
                <td class="p-3">34</td>
                <td class="p-3">82 - 84</td>
                <td class="p-3">63 - 65</td>
                <td class="p-3">90 - 92</td>
              </tr>
              <tr class="bg-surface-container-lowest font-semibold">
                <td class="p-3 text-primary">S (Hélène Profile)</td>
                <td class="p-3">36</td>
                <td class="p-3">85 - 88</td>
                <td class="p-3">66 - 69</td>
                <td class="p-3">93 - 96</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">M</td>
                <td class="p-3">38</td>
                <td class="p-3">89 - 92</td>
                <td class="p-3">70 - 73</td>
                <td class="p-3">97 - 100</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">L</td>
                <td class="p-3">40</td>
                <td class="p-3">93 - 96</td>
                <td class="p-3">74 - 77</td>
                <td class="p-3">101 - 104</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-surface-container-low p-4 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-[20px]">straighten</span>
          <span class="font-body text-body-sm text-on-surface-variant">
            Need custom hem adjustment? Your VIP Concierge Jean-Luc will record your floor clearance directives automatically upon checkout.
          </span>
        </div>

        <button 
          onClick={onClose}
          class="w-full bg-primary text-on-primary py-3 font-label text-label-md uppercase tracking-widest font-semibold"
        >
          Confirm Size Selection
        </button>
      </div>
    </div>
  );
}
