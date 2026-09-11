import React, { useState } from 'react';

export function VipPortalPage({ onNavigateCategory }) {
  const [activeNav, setActiveNav] = useState('orders');

  return (
    <div class="flex flex-col w-full">
      {/* Atelier Registry Header */}
      <section class="w-full bg-surface-container-low px-6 lg:px-12 py-10">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div class="space-y-3 max-w-2xl">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="bg-primary text-on-primary px-2.5 py-1 font-label text-label-sm tracking-widest uppercase text-xs font-semibold">VIP Salon Member</span>
              <span class="font-label text-label-md text-outline tracking-wider uppercase text-xs">Patron No. 894-FR</span>
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span class="font-label text-label-sm text-secondary uppercase tracking-widest font-semibold text-xs">Haute Concierge Active</span>
            </div>
            <h1 class="font-headline text-headline-lg text-on-surface tracking-tight text-4xl font-normal">Welcome back, Hélène</h1>
            <p class="font-body text-body-md text-on-surface-variant leading-relaxed">
              Your private sanctuary within INNOVEX. Your Autumn/Winter silhouettes are safely reserved under White Glove escort, and your custom measurement dossier remains synced with our Paris and Manhattan ateliers.
            </p>
          </div>

          {/* Patron Tier Progress Card */}
          <div class="bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between w-full lg:w-96 min-w-0 border border-surface-variant">
            <div class="flex items-center justify-between gap-4 mb-4">
              <div>
                <span class="font-label text-label-sm text-outline tracking-widest uppercase block text-[10px]">Membership Tier</span>
                <span class="font-headline text-headline-sm text-on-surface font-semibold text-2xl">L'Or Privilège</span>
              </div>
              <div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span class="material-symbols-outlined text-[20px]">workspace_premium</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between font-label text-label-md text-xs">
                <span class="text-on-surface-variant font-medium">Curated Spend</span>
                <span class="text-on-surface font-semibold">$12,450 / $15,000</span>
              </div>
              <div class="w-full h-1.5 bg-surface-container overflow-hidden">
                <div class="bg-primary h-full transition-all duration-700 ease-out" style={{ width: '83%' }}></div>
              </div>
              <div class="flex items-center justify-between text-body-sm font-body text-outline pt-1 text-xs">
                <span>$2,550 to renew tier</span>
                <span class="text-secondary font-label text-label-sm uppercase tracking-wider font-semibold text-[10px]">Renews Dec 31</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Portal Shell */}
      <section class="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Portal Sidebar */}
          <aside class="lg:col-span-3 space-y-8 sticky top-36">
            <nav aria-label="Portal Sections" class="bg-surface-container-lowest p-4 shadow-sm space-y-1.5 border border-surface-variant">
              <button 
                onClick={() => setActiveNav('orders')}
                class={`w-full flex items-center justify-between px-3.5 py-3 font-label text-label-lg tracking-wider uppercase transition-colors text-xs ${activeNav === 'orders' ? 'text-on-primary bg-primary' : 'text-on-surface hover:bg-surface-container'}`}
              >
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[18px]">inventory_2</span>
                  <span>Orders & Atelier</span>
                </div>
                <span class={`font-label text-[10px] px-1.5 py-0.5 font-bold ${activeNav === 'orders' ? 'bg-surface-container-lowest text-primary' : 'bg-surface-container text-on-surface-variant'}`}>2 Live</span>
              </button>

              <button 
                onClick={() => setActiveNav('wardrobe')}
                class={`w-full flex items-center justify-between px-3.5 py-3 font-label text-label-lg tracking-wider uppercase transition-colors text-xs ${activeNav === 'wardrobe' ? 'text-on-primary bg-primary' : 'text-on-surface hover:bg-surface-container'}`}
              >
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[18px]">bookmark_heart</span>
                  <span>Saved Wardrobe</span>
                </div>
                <span class="bg-surface-container text-on-surface-variant font-label text-[10px] px-1.5 py-0.5 font-semibold">3 Pieces</span>
              </button>

              <button 
                onClick={() => setActiveNav('measurements')}
                class={`w-full flex items-center justify-between px-3.5 py-3 font-label text-label-lg tracking-wider uppercase transition-colors text-xs ${activeNav === 'measurements' ? 'text-on-primary bg-primary' : 'text-on-surface hover:bg-surface-container'}`}
              >
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[18px]">straighten</span>
                  <span>Size & Fit Dossier</span>
                </div>
                <span class="text-secondary font-label text-xs font-semibold">EU 36</span>
              </button>
            </nav>

            {/* Private Concierge Liaison Card */}
            <div class="bg-surface-container-high p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-label text-label-sm text-secondary uppercase tracking-widest font-semibold text-xs">Private Liaison</span>
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div class="flex items-center gap-4">
                <img 
                  class="w-12 h-12 rounded-full object-cover shadow-sm" 
                  alt="Jean-Luc Moreau"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXh72KQ50Cf32CPvptzjyQUb-DQXF1wfPZFMI3FIbRZbHgJ7eJiBJDgz1lkRue_wJfxXGKCIP0-9P9NNie6oXgHXFJvBQKio4e-dWTqdNzesyqJum2jS1d46B7ogkfZRXfKda__FduF8SGEVv0zMw-NsO-pyArN5thvpCPsuVgPmqi3X-OpfOOX4ssRZHjoVlGaugCERAHliMRWQSbB9XtMd__AoEzgNktE66VjuMuI924muWBcAuNlA"
                />
                <div>
                  <h4 class="font-title text-title-md text-on-surface font-semibold">Jean-Luc Moreau</h4>
                  <p class="font-body text-body-sm text-on-surface-variant text-xs">Lead Atelier Stylist • Paris</p>
                </div>
              </div>
              <p class="font-body text-body-sm text-on-surface-variant text-xs italic">
                "Madam Laurent, your wool cape alteration has cleared our master artisan. I am on standby for bespoke consultations."
              </p>
              <button 
                onClick={() => alert('Direct dispatch message sent to Jean-Luc Moreau.')}
                class="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 px-3 font-label text-label-md uppercase tracking-wider text-center text-xs transition-colors font-semibold"
              >
                Inquire via Direct Dispatch
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main class="lg:col-span-9 space-y-12">
            {/* Orders Section */}
            <section id="orders" class="space-y-6">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-surface-variant">
                <div>
                  <span class="font-label text-label-sm text-secondary uppercase tracking-widest font-semibold text-xs block">Consignments & Archives</span>
                  <h2 class="font-headline text-headline-md text-on-surface text-3xl font-normal">Active Orders Trajectory</h2>
                </div>
                <span class="font-body text-body-sm text-outline text-xs">Showing 2 recent orders • Global Vault Track</span>
              </div>

              {/* Order Item 1 */}
              <div class="bg-surface-container-lowest p-6 lg:p-8 shadow-sm space-y-8 border border-surface-variant">
                <div class="flex flex-wrap items-start justify-between gap-4 bg-surface-container-low p-4">
                  <div class="space-y-1">
                    <div class="flex items-center gap-3">
                      <span class="font-title text-title-md text-on-surface font-semibold">Order No. IN-2025-9812</span>
                      <span class="bg-primary text-on-primary font-label text-label-sm px-2.5 py-0.5 uppercase tracking-widest text-[10px] font-bold">In Transit</span>
                    </div>
                    <p class="font-body text-body-sm text-on-surface-variant text-xs">Placed Oct 20, 2025 • Consignment Value: <span class="font-semibold text-on-surface">$1,480.00</span> (Customs Cleared)</p>
                  </div>
                  <button 
                    onClick={() => alert('Downloading official PDF invoice for Order IN-2025-9812')}
                    class="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-2 font-label text-label-sm uppercase tracking-wider text-xs font-semibold"
                  >
                    Download Invoice
                  </button>
                </div>

                {/* Trajectory Timeline */}
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="font-label text-label-md uppercase tracking-wider text-on-surface font-semibold text-xs">Fulfillment Trajectory</span>
                    <span class="font-label text-label-sm text-secondary uppercase font-semibold text-xs">Est. Delivery: Tomorrow, 2:00 PM</span>
                  </div>

                  <div class="grid grid-cols-4 gap-2 relative text-center">
                    <div class="flex flex-col items-center space-y-1">
                      <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span class="font-label text-label-sm text-on-surface font-semibold uppercase text-[10px]">Atelier Tailored</span>
                    </div>
                    <div class="flex flex-col items-center space-y-1">
                      <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span class="font-label text-label-sm text-on-surface font-semibold uppercase text-[10px]">Quality Inspected</span>
                    </div>
                    <div class="flex flex-col items-center space-y-1">
                      <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                        <span class="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span class="font-label text-label-sm text-primary font-bold uppercase text-[10px]">Customs Cleared</span>
                    </div>
                    <div class="flex flex-col items-center space-y-1">
                      <div class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center animate-pulse">
                        <span class="material-symbols-outlined text-[16px]">door_front</span>
                      </div>
                      <span class="font-label text-label-sm text-secondary font-bold uppercase text-[10px]">White Glove Courier</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Saved Wardrobe */}
            <section id="wardrobe" class="space-y-6">
              <div class="flex items-center justify-between border-b border-surface-variant pb-4">
                <div>
                  <span class="font-label text-label-sm text-secondary uppercase tracking-widest font-semibold text-xs">Private Reserve</span>
                  <h2 class="font-headline text-headline-md text-on-surface text-3xl font-normal">Saved Wardrobe Wishlist</h2>
                </div>
                <button 
                  onClick={onNavigateCategory}
                  class="text-primary hover:text-primary-container font-label text-label-md uppercase tracking-widest text-xs font-semibold"
                >
                  Explore Catalog
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-surface-container-lowest p-4 shadow-sm space-y-3 border border-surface-variant">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGv52Dh_cBq-mhWU_bu6GueX_KyjMOjGz55JmlEoYfcaKBAzaJ27Y3LyDkOtCoXheZr9XRrrgfJnIpnsKrZWs2po37oVpRBJ7GdGd2Q03Xq1v8oc41LyvS7DYF6jQJNwMcC5mnXXLsCkrMw4V7cj01y2q1f0z1h2RRL6Sxxp9xWCK4VqBYBtFEOuq1ND0WsdXVaOGteixr-YpnBbNnmzWwsGJ8ixIQp0Jy6pQ-EfybeMdj6wY-vvNp8A" 
                    alt="Ivory Peak Blazer"
                    class="w-full aspect-[3/4] object-cover"
                  />
                  <h3 class="font-title text-title-md font-semibold">Structured Ivory Peak Blazer</h3>
                  <div class="flex justify-between items-baseline">
                    <span class="font-headline text-lg">$850.00</span>
                    <span class="font-label text-xs text-secondary font-bold">Size EU 36</span>
                  </div>
                </div>

                <div class="bg-surface-container-lowest p-4 shadow-sm space-y-3 border border-surface-variant">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8r8M-0bje_pZoZSPvdSbacATPHyy0Gd6VtZal3GXT2jFkza8sSAOAjXsW5ni2sbIVCc1eRiSl1IX9g8KwSJ_xqBWKfmThr-3BielilmLqeOpF4lfEu57E4Dup_nyQ4KLWJtzUXRtMimI5GbaYkk9KdTYbwXawcXgP0Wo9STu6dMClbNJY-FwO1h7yNA53LQ4mtIrdGaS6gxjDQxXh7kxmqaCQqFhP-ck_wsMuV9FOj9lv7F4enrdzSQ" 
                    alt="Charmeuse Silk Gown"
                    class="w-full aspect-[3/4] object-cover"
                  />
                  <h3 class="font-title text-title-md font-semibold">Charmeuse Silk Column Gown</h3>
                  <div class="flex justify-between items-baseline">
                    <span class="font-headline text-lg">$1,220.00</span>
                    <span class="font-label text-xs text-secondary font-bold">Size EU 36</span>
                  </div>
                </div>

                <div class="bg-surface-container-lowest p-4 shadow-sm space-y-3 border border-surface-variant">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkVVaXMv8LsvevHroBW5f0aMZMGegN7xHZ7axej3MCrenKvp0yXrjv4NlI6TU4t9QAd-qHTS1Z4teof5zUDtL4iNtTa7EEx3GX99cnRVwOiuHk-hiSU7YM2QimOVUQh6W9gxXrjIC7bCjQuHUYHwMIKz0K2E-8FR5Scpr37d9CBH5ELWWJ_jsfiHVvIDAjcd5zTb5k4Vam0E6M9El91T1z6xDJfSzIQNVxCigtLnQxcoX1wY2z9X7VpA" 
                    alt="Satin Pointed Mules"
                    class="w-full aspect-[3/4] object-cover"
                  />
                  <h3 class="font-title text-title-md font-semibold">Sculpted Satin Pointed Mules</h3>
                  <div class="flex justify-between items-baseline">
                    <span class="font-headline text-lg">$580.00</span>
                    <span class="font-label text-xs text-secondary font-bold">Size EU 37</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}
