import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function CheckoutPage({ cartItems, onClearCart }) {
  const [address, setAddress] = useState({
    fullName: 'Rishwanth S',
    phone: '+91 98765 43210',
    street: '104, MG Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isPlaced, setIsPlaced] = useState(false);

  const subtotal = cartItems.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const shipping = subtotal > 5000 ? 0 : 499;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsPlaced(true);
    if (onClearCart) onClearCart();
  };

  if (isPlaced) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-[36px]">verified</span>
        </div>
        <h1 className="font-headline text-4xl text-on-surface">Order Placed Successfully!</h1>
        <p className="font-body text-on-surface-variant max-w-md mx-auto">
          Thank you for ordering with INNOVEX Studio. Your order details and tracking link have been dispatched to your phone & email.
        </p>
        <div className="bg-surface-container-low p-6 max-w-md mx-auto text-left space-y-2 border border-surface-variant">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Delivery Address</span>
          <p className="font-body text-sm font-semibold">{address.fullName}</p>
          <p className="font-body text-xs text-on-surface-variant">{address.street}, {address.city}, {address.state} - {address.pincode}</p>
          <p className="font-body text-xs text-on-surface-variant">Phone: {address.phone}</p>
        </div>
        <Link to="/" className="inline-block bg-primary text-on-primary px-8 py-3.5 font-label text-xs uppercase tracking-widest font-semibold">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-8">
      <div className="border-b border-surface-variant pb-4">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Secure Checkout</span>
        <h1 className="font-headline text-4xl text-on-surface">Express Delivery & Settlement</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Delivery Address & Map + Payment Options */}
        <div className="lg:col-span-7 space-y-8">
          {/* Delivery Address Section */}
          <div className="bg-surface-container-low p-6 shadow-sm border border-surface-variant space-y-4">
            <div className="flex justify-between items-center border-b border-surface-variant pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                <h3 className="font-headline text-xl text-on-surface font-semibold">Shipping & Delivery Address</h3>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="font-label text-xs uppercase tracking-wider text-primary font-bold hover:underline"
              >
                {isEditing ? 'Save Address' : 'Edit Address'}
              </button>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 gap-4 font-body text-xs">
                <div>
                  <label className="block text-outline uppercase text-[10px] mb-1">Full Name</label>
                  <input 
                    value={address.fullName} 
                    onChange={e => setAddress({...address, fullName: e.target.value})}
                    className="w-full bg-surface p-2 border border-outline-variant"
                  />
                </div>
                <div>
                  <label className="block text-outline uppercase text-[10px] mb-1">Phone Number</label>
                  <input 
                    value={address.phone} 
                    onChange={e => setAddress({...address, phone: e.target.value})}
                    className="w-full bg-surface p-2 border border-outline-variant"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-outline uppercase text-[10px] mb-1">Flat / Street Address</label>
                  <input 
                    value={address.street} 
                    onChange={e => setAddress({...address, street: e.target.value})}
                    className="w-full bg-surface p-2 border border-outline-variant"
                  />
                </div>
                <div>
                  <label className="block text-outline uppercase text-[10px] mb-1">City</label>
                  <input 
                    value={address.city} 
                    onChange={e => setAddress({...address, city: e.target.value})}
                    className="w-full bg-surface p-2 border border-outline-variant"
                  />
                </div>
                <div>
                  <label className="block text-outline uppercase text-[10px] mb-1">PIN Code</label>
                  <input 
                    value={address.pincode} 
                    onChange={e => setAddress({...address, pincode: e.target.value})}
                    className="w-full bg-surface p-2 border border-outline-variant"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-1 font-body text-sm">
                <p className="font-semibold text-on-surface">{address.fullName} <span className="text-xs text-primary font-normal">(Default)</span></p>
                <p className="text-on-surface-variant text-xs">{address.street}, {address.city}, {address.state} - {address.pincode}</p>
                <p className="text-on-surface-variant text-xs">Mobile: {address.phone}</p>
              </div>
            )}

            {/* Delivery Map Mockup */}
            <div className="relative w-full h-40 bg-surface-container overflow-hidden border border-outline-variant rounded-sm flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
                alt="Delivery Map"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 text-xs font-label uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>Dispatch Hub: Bengaluru Central Warehouse (Est. 2 Days)</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="bg-surface-container-low p-6 shadow-sm border border-surface-variant space-y-4">
            <h3 className="font-headline text-xl text-on-surface font-semibold border-b border-surface-variant pb-3">Payment Options (India)</h3>
            
            <div className="space-y-3 font-body text-sm">
              <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="pay" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-primary" />
                  <span className="font-semibold">UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                </div>
                <span className="font-label text-xs text-primary font-bold uppercase">Instant</span>
              </label>

              <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-primary" />
                  <span className="font-semibold">Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 bg-surface border border-outline-variant cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-primary" />
                  <span className="font-semibold">Cash on Delivery (COD)</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest p-6 shadow-sm border border-surface-variant space-y-6">
            <h3 className="font-headline text-xl font-semibold border-b border-surface-variant pb-3">Order Consignment ({cartItems.length})</h3>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-20 object-cover bg-surface-container" />
                  <div className="flex-1 text-xs space-y-1">
                    <h4 className="font-semibold text-on-surface text-sm">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.color} • Size {item.size}</p>
                    <p className="text-outline">Qty: {item.qty}</p>
                  </div>
                  <span className="font-label text-sm font-semibold">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-surface-variant pt-4 space-y-2 font-body text-xs text-on-surface-variant">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-on-surface">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Express Courier</span>
                <span>{shipping === 0 ? <strong className="text-primary uppercase font-label">Free</strong> : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-on-surface pt-2 border-t border-surface-variant">
                <span>Total Amount Payable</span>
                <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 font-label text-xs uppercase tracking-widest font-semibold shadow-md transition-colors"
            >
              Place Order & Pay ₹{total.toLocaleString('en-IN')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
