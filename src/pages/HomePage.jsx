import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTS, TOP_SALES } from '../data/mockData';

export function HomePage({ products = [], onAddToCart, onToggleWishlist, wishlistIds = [] }) {
  const [countdown, setCountdown] = useState({ hours: 7, mins: 42, secs: 19 });
  const [heroIndex, setHeroIndex] = useState(0);

  const heroSlides = [
    {
      bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
      tag: "Summer Collection 2025",
      title: "The Art of\nDraping",
      subtitle: "Fluid hand-loomed mulberry silks, sculptural ecru linen tailoring, and architectural drape.",
      cta: "Shop Women's Collection",
      link: "/category/womens-dresses"
    },
    {
      bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
      tag: "Men's Atelier Edition",
      title: "Tailored to\nPerfection",
      subtitle: "Super 150s fine wool suits, bespoke tuxedos, and handcrafted formal wear for the modern Indian man.",
      cta: "Shop Men's Apparel",
      link: "/category/mens-apparel"
    },
    {
      bg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
      tag: "Luxury Accessories",
      title: "Every Detail\nMatters",
      subtitle: "Hand-stitched Italian leather, 18K gold jewellery, and heritage cashmere — curated for India.",
      cta: "Shop Accessories",
      link: "/category/accessories"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  const categories = [
    {
      title: "Women's Dresses",
      slug: "womens-dresses",
      count: "10+ Silhouettes",
      bg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Men's Apparel",
      slug: "mens-apparel",
      count: "5 Tailored Pieces",
      bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxury Accessories",
      slug: "accessories",
      count: "6 Artisan Pieces",
      bg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Archival Sale",
      slug: "sale",
      count: "Up to 55% Off",
      bg: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const topSaleProducts = products.filter(p => TOP_SALES.includes(p.id)).slice(0, 4);
  const slide = heroSlides[heroIndex];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner with Auto-Slide */}
      <section className="relative w-full overflow-hidden bg-surface-container-high">
        <div className="relative h-[85vh] min-h-[560px] w-full flex items-end pb-16 lg:pb-24">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url('${s.bg}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/85 via-on-background/30 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-end">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-surface/90 backdrop-blur-md text-on-surface shadow-sm w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-label text-label-sm uppercase tracking-widest text-primary font-semibold text-[11px]">
                  {slide.tag}
                </span>
              </div>

              <h1 className="font-headline text-5xl md:text-6xl text-on-primary font-normal leading-tight tracking-tight whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="font-body text-body-lg text-inverse-on-surface/90 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={slide.link}
                  className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label text-xs uppercase tracking-widest transition-all shadow-md font-semibold"
                >
                  {slide.cta}
                </Link>
                <Link
                  to="/category/all"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-surface/15 hover:bg-surface/30 backdrop-blur-md text-on-primary font-label text-xs uppercase tracking-widest transition-all"
                >
                  View All Collections
                </Link>
              </div>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center gap-2 mt-8">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-1 transition-all duration-500 ${i === heroIndex ? 'w-8 bg-primary' : 'w-3 bg-surface/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sale Countdown Banner */}
      <div className="w-full bg-primary py-3 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="font-label text-xs uppercase tracking-widest text-on-primary font-semibold">
          Archival Sale Ends In:
        </span>
        <div className="flex items-center gap-2 font-headline text-on-primary">
          <span className="bg-on-primary/20 px-2 py-1 rounded text-sm font-bold min-w-[2.5rem] text-center">{String(countdown.hours).padStart(2,'0')}</span>
          <span className="text-sm font-bold">:</span>
          <span className="bg-on-primary/20 px-2 py-1 rounded text-sm font-bold min-w-[2.5rem] text-center">{String(countdown.mins).padStart(2,'0')}</span>
          <span className="text-sm font-bold">:</span>
          <span className="bg-on-primary/20 px-2 py-1 rounded text-sm font-bold min-w-[2.5rem] text-center">{String(countdown.secs).padStart(2,'0')}</span>
        </div>
        <Link to="/category/sale" className="text-on-primary underline font-label text-xs uppercase tracking-wider font-semibold">
          Shop Sale →
        </Link>
      </div>

      {/* 4 Main Category Showcase */}
      <section className="w-full py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">Haute Collections</span>
            <h2 className="font-headline text-on-surface text-3xl font-normal">Explore Categories</h2>
          </div>
          <Link
            to="/category/all"
            className="mt-4 md:mt-0 font-label text-xs uppercase tracking-widest text-primary hover:text-primary-container inline-flex items-center gap-2 font-semibold"
          >
            <span>See All Options & Products</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group relative overflow-hidden bg-surface-container aspect-[3/4] flex flex-col justify-end p-6 shadow-sm cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent" />
              <div className="relative z-10 text-on-primary space-y-2">
                <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed font-semibold">{cat.count}</span>
                <h3 className="font-headline text-2xl">{cat.title}</h3>
                <span className="inline-flex items-center gap-1 font-label tracking-widest uppercase text-on-primary pt-1 underline underline-offset-4 text-xs font-semibold">
                  Browse Options →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Sales — 4 Products */}
      <section className="w-full py-16 bg-surface-container-low border-t border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">Top Sales & Best Sellers</span>
              <h2 className="font-headline text-3xl text-on-surface">Trending Icons</h2>
            </div>
            <Link to="/category/all" className="font-label text-xs uppercase tracking-widest text-primary hover:text-primary-container inline-flex items-center gap-1 font-semibold mt-4 sm:mt-0">
              <span>View All Products</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topSaleProducts.map(product => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div key={product.id} className="group flex flex-col space-y-4 bg-surface-container-lowest p-4 shadow-sm border border-surface-variant">
                  <div className="relative w-full aspect-[3/4] bg-surface-container overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.images ? product.images[0] : 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    <button
                      onClick={() => onToggleWishlist(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                    >
                      <span className={`material-symbols-outlined text-[18px] ${isWishlisted ? 'text-red-500' : ''}`}>
                        {isWishlisted ? 'favorite' : 'favorite_border'}
                      </span>
                    </button>

                    <div className="absolute top-3 left-3 bg-primary px-2.5 py-1 font-label text-[10px] uppercase tracking-widest text-on-primary font-bold">
                      {product.badge || 'Best Seller'}
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-semibold">{product.subtitle}</span>
                        <div className="flex items-center text-secondary text-xs">
                          <span className="material-symbols-outlined text-[14px]">star</span>
                          <span className="ml-1 font-label text-on-surface">{product.rating}</span>
                        </div>
                      </div>
                      <Link to={`/product/${product.id}`} className="font-headline text-base text-on-surface group-hover:text-primary transition-colors block font-semibold mt-1">
                        {product.title}
                      </Link>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-surface-variant/40">
                      <div>
                        <span className="font-title font-bold text-on-surface text-base">₹{Number(product.price).toLocaleString('en-IN')}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-outline line-through text-xs">₹{Number(product.originalPrice).toLocaleString('en-IN')}</span>
                        )}
                      </div>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="bg-primary hover:bg-primary-container text-on-primary px-3 py-1.5 font-label text-[10px] uppercase tracking-widest font-semibold transition-colors"
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="w-full py-12 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "local_shipping", title: "Free Express Shipping", sub: "On orders above ₹5,000" },
            { icon: "verified", title: "100% Authentic", sub: "Certified & quality-checked" },
            { icon: "replay", title: "Easy 14-Day Returns", sub: "Hassle-free return policy" },
            { icon: "support_agent", title: "Concierge Support", sub: "Mon–Sat, 10AM–8PM IST" }
          ].map(f => (
            <div key={f.title} className="flex flex-col items-center text-center gap-3 p-6 border border-surface-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[32px]">{f.icon}</span>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">{f.title}</p>
                <p className="font-body text-xs text-on-surface-variant mt-1">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
