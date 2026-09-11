import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header({ cartCount, wishlistCount, openCart, user, onGoogleSignIn, onSignOut }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-sm border-b border-surface-variant/40">
      {/* Top Micro Announcement Bar */}
      <div className="h-7 bg-primary text-on-primary flex items-center justify-center px-4">
        <p className="font-label tracking-widest uppercase font-medium text-[10px] sm:text-xs text-center">
          Welcome to INNOVEX India | Free express shipping on orders over ₹5,000 | Concierge Support
        </p>
      </div>

      {/* Compact Main Header Bar */}
      <div className="h-14 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 64" fill="none" className="h-7 w-auto">
            <text x="10" y="44" fontFamily="'Playfair Display', Georgia, serif" fontSize="32" fontWeight="700" letterSpacing="4" fill="#111827">INNOVEX</text>
            <circle cx="218" cy="24" r="4" fill="#065f46"/>
            <text x="228" y="42" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="600" letterSpacing="3" fill="#065f46">STUDIO</text>
            <line x1="10" y1="53" x2="270" y2="53" stroke="#065f46" strokeWidth="1.5" strokeOpacity="0.6"/>
          </svg>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md items-center relative">
          <div className="w-full flex items-center bg-surface-container-low px-3 py-1 border border-transparent focus-within:border-primary transition-colors">
            <span className="material-symbols-outlined text-outline text-[18px] mr-2">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none p-0 font-body text-xs text-on-surface placeholder:text-outline focus:outline-none" 
              placeholder="Search silk dresses, men's suits, accessories..." 
              type="text"
            />
            <button type="submit" className="font-label text-outline hover:text-primary px-1.5 py-0.5 bg-surface-container border border-outline-variant rounded text-[10px] uppercase font-semibold">
              Search
            </button>
          </div>
        </form>

        {/* Right Action Icons: INR Currency, Wishlist, Bag, Profile */}
        <div className="flex items-center gap-5 shrink-0">
          <div className="hidden xl:flex items-center gap-1 font-label text-xs uppercase tracking-wider text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            <span>INR ₹</span>
          </div>

          {/* Wishlist Icon */}
          <Link 
            to="/wishlist" 
            className="relative flex items-center text-on-surface hover:text-primary transition-colors"
            title="Saved Wardrobe"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-secondary text-on-secondary font-label text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Shopping Bag Button */}
          <button 
            aria-label="Shopping Bag" 
            className="relative flex items-center text-on-surface hover:text-primary transition-colors" 
            type="button"
            onClick={openCart}
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Sign In / Profile */}
          {user ? (
            <Link to="/profile" className="flex items-center gap-2 pl-2 group">
              <img 
                alt="User Profile" 
                className="w-7 h-7 rounded-full object-cover ring-2 ring-primary group-hover:scale-105 transition-transform" 
                src={user.user_metadata?.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}
              />
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold truncate max-w-[100px]">
                  {user.user_metadata?.full_name || 'My Profile'}
                </span>
                <span className="font-label text-secondary tracking-wider uppercase text-[8px]">VIP Patron</span>
              </div>
            </Link>
          ) : (
            <button 
              onClick={onGoogleSignIn}
              className="flex items-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface px-3 py-1 font-label text-xs uppercase tracking-wider transition-colors border border-outline-variant font-semibold"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
