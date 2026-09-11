import React from 'react';
import { Link } from 'react-router-dom';

export function WishlistPage({ products = [], wishlistIds = [], onToggleWishlist, onAddToCart }) {
  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
      <div className="space-y-2 border-b border-surface-variant pb-6 mb-8">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Private Reserve</span>
        <h1 className="font-headline text-4xl text-on-surface">Saved Wardrobe & Wishlist</h1>
        <p className="font-body text-on-surface-variant text-sm">
          Your reserved haute couture pieces and priority holds.
        </p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-surface-container-low p-8 border border-surface-variant">
          <span className="material-symbols-outlined text-outline text-[48px]">bookmark_heart</span>
          <h3 className="font-headline text-2xl text-on-surface">Your Saved Wardrobe is Empty</h3>
          <p className="font-body text-on-surface-variant max-w-md mx-auto text-xs">
            Click the heart icon on any garment across our collections to reserve it in your private wardrobe list.
          </p>
          <Link to="/category/all" className="inline-block bg-primary text-on-primary px-8 py-3 font-label text-xs uppercase tracking-widest font-semibold">
            Explore All Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistedProducts.map(product => (
            <div key={product.id} className="bg-surface-container-lowest p-4 shadow-sm border border-surface-variant space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
                  <img src={product.images ? product.images[0] : ''} alt={product.title} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-2.5 right-2.5 w-8 h-8 bg-surface/90 text-error flex items-center justify-center shadow-sm"
                    title="Remove from wishlist"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete_outline</span>
                  </button>
                </div>
                <div>
                  <span className="font-label text-xs text-outline uppercase">{product.subtitle}</span>
                  <h3 className="font-headline text-xl text-on-surface font-semibold">{product.title}</h3>
                  <span className="font-title text-lg font-bold text-primary block mt-1">₹{Number(product.price).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 font-label text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                <span>Move to Bag</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
