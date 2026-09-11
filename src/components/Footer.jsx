import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-16 border-t border-surface-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">The INNOVEX Gazette</span>
            <h3 className="font-headline text-on-surface text-xl font-normal">Correspondence</h3>
            <p className="font-body text-xs text-on-surface-variant">
              Receive invitations to private collection viewings and seasonal releases.
            </p>
            <form className="flex items-center" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to INNOVEX India Gazette'); }}>
              <input 
                className="flex-1 bg-surface-container-lowest px-3 py-2 text-xs text-on-surface placeholder:text-outline border border-outline-variant focus:outline-none" 
                placeholder="Enter email address..." 
                type="email"
                required
              />
              <button className="bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest px-4 py-2 font-semibold" type="submit">
                Join
              </button>
            </form>
          </div>

          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">Flagship Boutiques</h4>
            <ul className="space-y-1.5 text-xs text-on-surface-variant">
              <li><strong className="text-on-surface block">Mumbai Studio</strong>Bandr-Kurla Complex</li>
              <li><strong className="text-on-surface block">Delhi Atelier</strong>Mehrauli Couture Hub</li>
              <li><strong className="text-on-surface block">Bengaluru Maison</strong>Indiranagar 100ft Road</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">Customer Concierge</h4>
            <ul className="space-y-1 text-xs text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Express India Courier</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Complimentary Alterations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Returns & Exchanges</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">Maison Heritage</h4>
            <ul className="space-y-1 text-xs text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Craftsmanship & Lineage</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Ethical Traceability</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sustainable Silk Alliances</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant border-t border-surface-variant/40">
          <p>© 2025 INNOVEX India Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-outline font-label text-[10px] tracking-wider uppercase">
            <span>UPI</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>NETBANKING</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
