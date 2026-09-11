import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function ProfilePage({ user, onSignOut }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  const mockOrders = [
    {
      id: "INV-20251101",
      date: "1 Nov 2025",
      status: "Delivered",
      statusColor: "text-green-600 bg-green-50",
      total: 45990,
      items: [
        { title: "Bespoke Double-Breasted Wool Tuxedo", size: "42R", qty: 1, img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=200&q=80" }
      ]
    },
    {
      id: "INV-20251015",
      date: "15 Oct 2025",
      status: "Delivered",
      statusColor: "text-green-600 bg-green-50",
      total: 47490,
      items: [
        { title: "Emerald Bias Cut Silk Slip Dress", size: "S", qty: 1, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=200&q=80" },
        { title: "Handspun Pure Cashmere Stole", size: "Free Size", qty: 1, img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=200&q=80" }
      ]
    },
    {
      id: "INV-20250928",
      date: "28 Sep 2025",
      status: "Cancelled",
      statusColor: "text-red-600 bg-red-50",
      total: 16990,
      items: [
        { title: "Handcrafted Pointed Leather Mules", size: "37", qty: 1, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80" }
      ]
    }
  ];

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: 'receipt_long' },
    { id: 'wishlist', label: 'Saved Items', icon: 'favorite' },
    { id: 'addresses', label: 'Addresses', icon: 'location_on' },
    { id: 'settings', label: 'Account Settings', icon: 'manage_accounts' }
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-sm p-6 md:p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src={user?.user_metadata?.avatar_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-primary"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white" title="Online" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-headline text-2xl md:text-3xl text-on-surface">
                {user?.user_metadata?.full_name || 'Guest Patron'}
              </h1>
              <span className="bg-primary text-on-primary font-label text-[10px] px-2 py-0.5 uppercase tracking-widest font-bold rounded-sm">
                VIP Patron
              </span>
            </div>
            <p className="font-body text-on-surface-variant text-sm mt-0.5">
              {user?.email || 'Sign in to access your full profile'}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-label text-xs text-secondary tracking-wider">
                <span className="material-symbols-outlined text-[14px] align-middle mr-1">star</span>
                Gold Member
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-label text-xs text-outline">Member since Oct 2024</span>
            </div>
          </div>
        </div>

        <button
          onClick={onSignOut}
          className="flex items-center gap-2 bg-surface hover:bg-error-container text-on-surface hover:text-on-error-container border border-surface-variant px-5 py-2.5 font-label text-xs uppercase tracking-widest transition-colors self-start md:self-auto font-semibold"
        >
          <span className="material-symbols-outlined text-[16px]">logout</span>
          Sign Out
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Orders", value: "3", icon: "receipt_long", color: "text-primary" },
          { label: "Total Spent", value: "₹1,10,470", icon: "payments", color: "text-green-600" },
          { label: "Saved Items", value: "0", icon: "favorite", color: "text-red-500" },
          { label: "Loyalty Points", value: "1,104", icon: "star", color: "text-amber-500" }
        ].map(stat => (
          <div key={stat.label} className="bg-surface-container-lowest border border-surface-variant p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">{stat.label}</span>
              <span className={`material-symbols-outlined text-[18px] ${stat.color}`}>{stat.icon}</span>
            </div>
            <span className={`font-headline text-2xl font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-surface-variant mb-8 flex overflow-x-auto gap-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 font-label text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap border-b-2 ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface">Order History</h2>
          {mockOrders.map(order => (
            <div key={order.id} className="bg-surface-container-lowest border border-surface-variant p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-variant pb-4">
                <div>
                  <span className="font-label text-xs uppercase tracking-widest text-outline block">Order ID</span>
                  <span className="font-headline text-lg text-on-surface font-semibold">{order.id}</span>
                </div>
                <div className="text-right">
                  <span className="font-body text-xs text-outline block">{order.date}</span>
                  <span className={`inline-block font-label text-[10px] uppercase tracking-wider font-bold px-3 py-1 mt-1 ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={item.img} alt={item.title} className="w-14 h-18 object-cover bg-surface-container" style={{height:'4.5rem'}} />
                    <div className="flex-1">
                      <p className="font-headline text-sm text-on-surface font-semibold">{item.title}</p>
                      <p className="font-body text-xs text-on-surface-variant">Size: {item.size} • Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-surface-variant pt-3">
                <span className="font-title text-base font-bold text-on-surface">
                  Total: <span className="text-primary">₹{order.total.toLocaleString('en-IN')}</span>
                </span>
                {order.status === 'Delivered' && (
                  <button className="font-label text-xs uppercase tracking-wider text-primary hover:underline font-semibold">
                    Buy Again
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div className="text-center py-12 space-y-4">
          <span className="material-symbols-outlined text-outline text-[48px]">favorite_border</span>
          <h3 className="font-headline text-2xl text-on-surface">Your Saved Items</h3>
          <p className="font-body text-on-surface-variant text-sm">Visit your wishlist to see all saved pieces.</p>
          <Link
            to="/wishlist"
            className="inline-block bg-primary text-on-primary px-8 py-3 font-label text-xs uppercase tracking-widest font-semibold"
          >
            Go to Wishlist
          </Link>
        </div>
      )}

      {activeTab === 'addresses' && (
        <div className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface">Saved Addresses</h2>
          <div className="bg-surface-container-lowest border border-primary/30 p-6 space-y-2 max-w-md">
            <div className="flex items-center justify-between">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Home (Default)</span>
              <button className="font-label text-xs text-outline hover:text-primary uppercase tracking-wider">Edit</button>
            </div>
            <p className="font-body text-sm font-semibold text-on-surface">Rishwanth S</p>
            <p className="font-body text-xs text-on-surface-variant">104, MG Road, Indiranagar</p>
            <p className="font-body text-xs text-on-surface-variant">Bengaluru, Karnataka - 560038</p>
            <p className="font-body text-xs text-on-surface-variant">Mobile: +91 98765 43210</p>
          </div>
          <button className="flex items-center gap-2 border border-dashed border-primary text-primary px-5 py-3 font-label text-xs uppercase tracking-wider font-semibold hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined text-[16px]">add</span>
            Add New Address
          </button>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6 max-w-lg">
          <h2 className="font-headline text-2xl text-on-surface">Account Settings</h2>
          <div className="space-y-4">
            {[
              { label: "Full Name", value: user?.user_metadata?.full_name || "Guest Patron" },
              { label: "Email Address", value: user?.email || "Not signed in" },
              { label: "Phone Number", value: "+91 98765 43210" },
              { label: "Currency", value: "INR (₹ Indian Rupee)" },
              { label: "Language", value: "English" }
            ].map(field => (
              <div key={field.label} className="bg-surface-container-lowest border border-surface-variant p-4 flex justify-between items-center">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block">{field.label}</span>
                  <span className="font-body text-sm text-on-surface mt-0.5 block">{field.value}</span>
                </div>
                <button className="font-label text-xs text-primary hover:underline uppercase tracking-wider">Edit</button>
              </div>
            ))}
          </div>

          <button
            onClick={onSignOut}
            className="flex items-center gap-2 bg-error-container text-on-error-container hover:bg-error hover:text-on-error px-6 py-2.5 font-label text-xs uppercase tracking-widest transition-colors font-semibold"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Sign Out of Account
          </button>
        </div>
      )}
    </div>
  );
}
