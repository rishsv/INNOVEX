import React, { useState } from 'react';

export function CartDrawer({ isOpen, onClose, cartItems, updateQty, removeItem, onProceedCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 5000 ? 0 : 499;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-on-background/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 bg-surface-container-low border-b border-surface-variant flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[24px]">shopping_bag</span>
              <div>
                <h3 className="font-headline text-on-surface font-semibold text-base">Consignment Bag</h3>
                <span className="font-label text-outline uppercase tracking-wider text-[10px]">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} Reserved
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <span className="material-symbols-outlined text-outline text-[48px]">bookmark_border</span>
                <p className="font-title text-on-surface text-sm">Your luxury bag is empty.</p>
                <button onClick={onClose} className="bg-primary text-on-primary px-6 py-2.5 font-label text-xs uppercase tracking-wider font-semibold">
                  Explore Silhouettes
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-surface-container-lowest p-3.5 shadow-sm border border-surface-variant relative">
                  <img src={item.image} alt={item.title} className="w-16 h-20 object-cover shrink-0 bg-surface-container" />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-headline text-xs text-on-surface font-semibold truncate pr-2">{item.title}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-outline hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-[16px]">delete_outline</span>
                        </button>
                      </div>
                      <p className="font-body text-on-surface-variant text-[11px] mt-0.5">
                        {item.color} • Size {item.size}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center bg-surface-container px-2 py-0.5">
                        <button onClick={() => updateQty(item.id, -1)} className="w-5 text-center font-bold text-on-surface hover:text-primary text-xs">−</button>
                        <span className="w-5 text-center font-label text-xs font-semibold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-5 text-center font-bold text-on-surface hover:text-primary text-xs">+</button>
                      </div>
                      <span className="font-label text-xs text-on-surface font-semibold">
                        ₹{(item.price * item.qty).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-surface-container-low border-t border-surface-variant space-y-3">
              <div className="space-y-1.5 font-body text-xs text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-on-surface">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Courier Delivery</span>
                  <span>{shipping === 0 ? <strong className="text-primary uppercase font-label">Free</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-on-surface font-title text-sm font-bold pt-2 border-t border-surface-variant">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={onProceedCheckout}
                className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 font-label text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Proceed to Checkout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
