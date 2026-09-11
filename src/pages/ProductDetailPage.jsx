import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { REVIEWS } from '../data/mockData';

export function ProductDetailPage({ products = [], onAddToCart, onToggleWishlist, wishlistIds, onOpenSizeModal }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId) || products[0];

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState('S');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('tab-overview');

  if (!product) return null;

  const isWishlisted = wishlistIds.includes(product.id);

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-on-surface-variant font-label text-xs uppercase tracking-wider">
          <nav className="flex items-center gap-2">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to={`/category/${product.category}`}>Collection</Link>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface font-semibold">{product.title}</span>
          </nav>
          <div className="flex items-center gap-4 text-on-surface-variant text-[11px]">
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Atelier Batch #8812</span>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="hidden sm:inline">INNOVEX Certified Authentic</span>
          </div>
        </div>
      </div>

      {/* Main Showcase Section */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
          {/* Gallery Column */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 sm:gap-6">
            <div className="flex sm:flex-col gap-3 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
              {product.images?.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative w-20 h-28 bg-surface-container-low overflow-hidden focus:outline-none transition-all duration-200 ${activeImgIndex === idx ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 px-1 py-0.5 font-label text-[9px] text-on-surface uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Display Frame */}
            <div className="relative flex-1 bg-surface-container-low aspect-[3/4] sm:aspect-[4/5] overflow-hidden shadow-sm group">
              <img 
                src={product.images ? product.images[activeImgIndex] : ''} 
                alt={product.title} 
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-5 left-5 flex flex-col items-start gap-2 pointer-events-none">
                <span className="bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1.5 font-label text-xs uppercase tracking-widest text-on-surface font-semibold text-[10px] shadow-sm">
                  {product.fabric}
                </span>
                <span className="bg-primary text-on-primary px-3 py-1 font-label text-[9px] uppercase tracking-widest font-semibold">
                  Permanent Series
                </span>
              </div>

              {/* Wishlist Floating Trigger */}
              <button 
                onClick={() => onToggleWishlist(product.id)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors shadow-md"
              >
                <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'text-secondary fill-1' : ''}`}>
                  {isWishlisted ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>
          </div>

          {/* Specs & Buy Box Column */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
                  INNOVEX PERMANENT EDITION 01
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-secondary text-[14px]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[15px]">star</span>
                    ))}
                  </div>
                  <span className="font-label text-xs font-bold text-on-surface">{product.rating}</span>
                  <span className="font-label text-xs text-on-surface-variant underline">({product.reviewsCount} reviews)</span>
                </div>
              </div>
              <h1 className="font-headline text-3xl text-on-surface font-normal leading-tight">
                {product.title}
              </h1>
              <div className="flex items-baseline gap-4 pt-1">
                <span className="font-headline text-2xl text-on-surface font-semibold">₹{Number(product.price).toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <span className="font-body text-xs text-outline line-through">₹{Number(product.originalPrice).toLocaleString('en-IN')}</span>
                )}
                <span className="font-body text-xs text-on-surface-variant uppercase">Taxes included</span>
              </div>
            </div>

            {/* Inventory Status */}
            <div className="p-3 bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-label text-xs font-semibold tracking-wider uppercase">In Stock — Express Delivery</span>
              </div>
              <span className="font-label text-[10px] text-secondary font-semibold uppercase tracking-wider bg-secondary-fixed/50 px-2 py-0.5">
                {product.stockStatus || 'Atelier Reserve'}
              </span>
            </div>

            {/* Colors */}
            {product.colors && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface font-semibold">
                    Colorway: <span className="font-normal text-on-surface-variant">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button 
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`relative w-9 h-9 p-0.5 transition-all ${selectedColor === c.name ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface' : 'hover:ring-1 hover:ring-outline'}`}
                      title={c.name}
                    >
                      <span className="block w-full h-full" style={{ backgroundColor: c.hex }}></span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface font-semibold">
                    Select Size
                  </span>
                  <button 
                    onClick={onOpenSizeModal}
                    className="font-label text-xs uppercase tracking-wider text-primary hover:text-primary-container underline flex items-center gap-1 font-semibold"
                  >
                    <span className="material-symbols-outlined text-[16px]">straighten</span> Fit Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button 
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 px-2 text-center font-label text-xs uppercase tracking-wider transition-colors ${selectedSize === sz ? 'bg-on-background text-surface shadow-sm font-semibold' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Buy CTA */}
            <div className="pt-4 space-y-3">
              <div className="flex gap-3">
                <div className="flex items-center bg-surface-container-low px-2 py-1 shadow-sm">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-10 font-bold text-on-surface hover:text-primary">−</button>
                  <span className="w-10 text-center font-label text-xs font-bold text-on-surface">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-8 h-10 font-bold text-on-surface hover:text-primary">+</button>
                </div>

                <button 
                  onClick={() => onAddToCart(product, selectedSize, qty, selectedColor)}
                  className="flex-1 bg-primary hover:bg-primary-container text-on-primary py-4 px-6 font-label text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-3 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span>Add to Bag — ₹{(product.price * qty).toLocaleString('en-IN')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 mt-16">
        <div className="flex items-center justify-center gap-8 bg-surface-container-low px-6 py-4 shadow-sm border-b border-surface-variant">
          <button 
            onClick={() => setActiveTab('tab-overview')}
            className={`pb-1 font-label text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'tab-overview' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            1. Overview & Fit
          </button>
          <button 
            onClick={() => setActiveTab('tab-fabric')}
            className={`pb-1 font-label text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'tab-fabric' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            2. Fabric & Care
          </button>
          <button 
            onClick={() => setActiveTab('tab-reviews')}
            className={`pb-1 font-label text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${activeTab === 'tab-reviews' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            3. Customer Reviews ({REVIEWS.length})
          </button>
        </div>

        <div className="py-12">
          {activeTab === 'tab-overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Atelier Craft Profile</span>
                <h2 className="font-headline text-2xl text-on-surface">A study in diagonal grain tension and sensual fluid movement.</h2>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-5 space-y-2">
                  <h3 className="font-title text-sm font-semibold text-on-surface">Cowl Décolletage</h3>
                  <p className="font-body text-xs text-on-surface-variant">Self-faced gentle cowl neckline weighted internally for drape stability.</p>
                </div>
                <div className="bg-surface-container-low p-5 space-y-2">
                  <h3 className="font-title text-sm font-semibold text-on-surface">Open Spine</h3>
                  <p className="font-body text-xs text-on-surface-variant">Low-back perimeter anchored with hand-stitched rouleau cords.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab-fabric' && (
            <div className="max-w-2xl space-y-4">
              <h3 className="font-headline text-xl font-normal text-on-surface">{product.fabric}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Woven on traditional looms to achieve high density. Hand-dyed using organic botanical plant extracts. Dry clean only.
              </p>
            </div>
          )}

          {activeTab === 'tab-reviews' && (
            <div className="space-y-6 max-w-3xl">
              {REVIEWS.map(r => (
                <div key={r.id} className="bg-surface-container-lowest p-6 shadow-sm border border-surface-variant space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-title font-semibold">{r.author} ({r.location})</span>
                    <span className="font-label text-xs text-outline">{r.date}</span>
                  </div>
                  <h4 className="font-headline text-lg font-semibold text-primary">{r.title}</h4>
                  <p className="font-body text-xs text-on-surface-variant">{r.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
