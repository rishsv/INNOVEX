import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const CATEGORY_META = {
  'womens-dresses': {
    title: "Women's Dresses",
    description: "Fluid silhouettes, sculptural draping, and handcrafted fabrics designed for the modern Indian woman.",
    heroImg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=80"
  },
  'mens-apparel': {
    title: "Men's Apparel",
    description: "Bespoke tailoring, fine wool suits, and premium shirts — engineered for the contemporary Indian gentleman.",
    heroImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
  },
  'accessories': {
    title: "Luxury Accessories",
    description: "Italian leather bags, 18K gold jewellery, cashmere stoles and artisan footwear — curated for India.",
    heroImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80"
  },
  'sale': {
    title: "Archival Sale",
    description: "Archive season pieces at incredible prices. Premium quality at up to 55% off — limited stock.",
    heroImg: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1600&q=80"
  },
  'all': {
    title: "All Collections",
    description: "Explore the complete INNOVEX Studio portfolio — women's, men's, accessories and sale curated all in one place.",
    heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
  }
};

export function CategoryPage({ products = [], onAddToCart, onToggleWishlist, wishlistIds = [] }) {
  const { categorySlug } = useParams();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState('');
  const [gridCols, setGridCols] = useState(3);
  const [priceMax, setPriceMax] = useState(100000);
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync search from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('search') || '';
    setSearchQuery(q);
  }, [location.search]);

  const meta = CATEGORY_META[categorySlug] || CATEGORY_META['all'];

  const filterProducts = () => {
    let list = [...products];

    // Filter by category slug
    if (categorySlug && categorySlug !== 'all') {
      list = list.filter(p => {
        if (categorySlug === 'womens-dresses') return p.category === 'womens-dresses';
        if (categorySlug === 'mens-apparel') return p.category === 'mens-apparel';
        if (categorySlug === 'accessories') return p.category === 'accessories';
        if (categorySlug === 'sale') return p.category === 'sale' || (p.originalPrice && p.originalPrice > p.price * 1.2);
        return p.category === categorySlug;
      });
    }

    // Filter by price
    list = list.filter(p => p.price <= priceMax);

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q) ||
        p.fabric?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }

    // Filter by size
    if (selectedSize) {
      list = list.filter(p => p.sizes && p.sizes.includes(selectedSize));
    }

    // Sort
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return list;
  };

  const filteredProducts = filterProducts();
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size', 'One Size', '36', '37', '38', '39', '40'];

  return (
    <div className="flex flex-col w-full">
      {/* Category Hero */}
      <section className="relative w-full h-52 md:h-64 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${meta.heroImg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-10">
          <nav className="flex items-center gap-2 text-on-primary/70 text-xs font-label uppercase tracking-wider mb-2">
            <Link to="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-on-primary">{meta.title}</span>
          </nav>
          <h1 className="font-headline text-4xl md:text-5xl text-on-primary font-normal tracking-tight">{meta.title}</h1>
          <p className="font-body text-sm text-on-primary/80 mt-1 max-w-xl">{meta.description}</p>
        </div>
      </section>

      {/* Sticky Control Strip */}
      <div className="sticky top-[84px] z-40 bg-surface/95 backdrop-blur-md px-6 lg:px-12 py-3 border-b border-surface-variant shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface font-bold">
              {filteredProducts.length} Styles
            </span>
            {searchQuery && (
              <span className="bg-primary/10 text-primary font-label text-xs px-2 py-0.5 rounded">
                Search: "{searchQuery}"
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-surface-container-low border border-surface-variant text-on-surface font-label text-xs px-3 py-1.5 cursor-pointer focus:outline-none focus:border-primary"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* Grid View Toggle */}
            <div className="flex items-center bg-surface-container p-1 gap-1">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 transition-colors ${gridCols === 2 ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-outline'}`}
                title="2-Col View"
              >
                <span className="material-symbols-outlined text-[18px]">view_agenda</span>
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 transition-colors ${gridCols === 3 ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-outline'}`}
                title="3-Grid View"
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Sidebar Filters */}
          <aside className="hidden lg:flex lg:col-span-3 flex-col space-y-8 pr-4 border-r border-surface-variant">
            {/* Price Range */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">Max Price</span>
                <span className="font-label text-xs text-primary font-bold">₹{priceMax.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-primary h-1 bg-surface-variant cursor-pointer"
              />
              <div className="flex justify-between text-xs text-outline font-label">
                <span>₹5,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Size Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">Size</span>
                {selectedSize && (
                  <button onClick={() => setSelectedSize('')} className="font-label text-[10px] uppercase tracking-wider text-outline hover:text-primary">Clear</button>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                    className={`h-9 flex items-center justify-center font-label text-xs transition-colors border ${selectedSize === sz ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-surface-variant'}`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Search in sidebar */}
            <div className="space-y-2">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold block">Search</span>
              <input
                type="text"
                placeholder="silk, blazer, leather..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container-low border border-surface-variant px-3 py-2 font-body text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
              />
            </div>

            {/* Category Links */}
            <div className="space-y-2">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold block">Collections</span>
              {[
                { label: "All Collections", slug: "all" },
                { label: "Women's Dresses", slug: "womens-dresses" },
                { label: "Men's Apparel", slug: "mens-apparel" },
                { label: "Accessories", slug: "accessories" },
                { label: "Sale", slug: "sale" }
              ].map(cat => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className={`block font-label text-xs uppercase tracking-wider py-1.5 transition-colors ${categorySlug === cat.slug ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-surface-container-low p-8 border border-surface-variant">
                <span className="material-symbols-outlined text-outline text-[48px]">style</span>
                <h3 className="font-headline text-2xl text-on-surface">No styles found</h3>
                <p className="font-body text-on-surface-variant text-sm">Try adjusting filters or browse all collections.</p>
                <Link to="/category/all" className="inline-block bg-primary text-on-primary px-6 py-2.5 font-label text-xs uppercase tracking-widest font-semibold">
                  Browse All Collections
                </Link>
              </div>
            ) : (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-x-6 gap-y-10`}>
                {filteredProducts.map(product => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  const discount = product.originalPrice
                    ? Math.round((1 - product.price / product.originalPrice) * 100)
                    : null;
                  return (
                    <article key={product.id} className="group flex flex-col space-y-4 bg-surface-container-lowest p-3 border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
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

                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          <span className="bg-primary px-2.5 py-1 font-label text-[10px] uppercase tracking-widest text-on-primary font-bold">
                            {product.badge || 'INNOVEX'}
                          </span>
                          {discount && discount > 0 && (
                            <span className="bg-secondary text-on-secondary px-2.5 py-1 font-label text-[10px] uppercase tracking-widest font-bold">
                              -{discount}%
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col space-y-1.5 flex-1 justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label text-[10px] uppercase tracking-widest text-outline">{product.subtitle}</span>
                            <div className="flex items-center text-secondary text-xs">
                              <span className="material-symbols-outlined text-[14px]">star</span>
                              <span className="font-label font-semibold ml-1 text-on-surface">{product.rating}</span>
                            </div>
                          </div>
                          <Link to={`/product/${product.id}`} className="font-headline text-base text-on-surface group-hover:text-primary transition-colors block font-semibold mt-1">
                            {product.title}
                          </Link>
                        </div>
                        <div className="flex items-baseline justify-between pt-2 border-t border-surface-variant/40">
                          <div>
                            <span className="font-title font-bold text-on-surface text-base">₹{Number(product.price).toLocaleString('en-IN')}</span>
                            {product.originalPrice && (
                              <span className="ml-2 text-outline line-through text-xs">₹{Number(product.originalPrice).toLocaleString('en-IN')}</span>
                            )}
                          </div>
                          <button
                            onClick={() => onAddToCart(product, selectedSize || product.sizes?.[0] || 'S')}
                            className="bg-primary hover:bg-primary-container text-on-primary px-3 py-1.5 font-label text-[10px] uppercase tracking-wider font-semibold transition-colors"
                          >
                            + Bag
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
