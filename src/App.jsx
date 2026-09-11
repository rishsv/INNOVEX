import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { VipPortalPage } from './pages/VipPortalPage';
import { WishlistPage } from './pages/WishlistPage';
import { ProfilePage } from './pages/ProfilePage';
import { LookbookPage } from './pages/LookbookPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { INITIAL_CART, PRODUCTS as LOCAL_PRODUCTS } from './data/mockData';
import { supabase, signInWithGoogle, signOut, fetchSupabaseProducts } from './lib/supabase';

function AppContent() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(LOCAL_PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          showToast(`Welcome ${session.user.user_metadata?.full_name || session.user.email}`);
        }
      });

      fetchSupabaseProducts().then(remoteProducts => {
        if (remoteProducts && remoteProducts.length > 0) {
          setProducts(remoteProducts);
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      showToast('Redirecting to Google OAuth...');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      showToast('Signed out of session');
    } catch (err) {
      setUser(null);
    }
  };

  const handleToggleWishlist = (productId) => {
    if (wishlistIds.includes(productId)) {
      setWishlistIds(wishlistIds.filter(id => id !== productId));
      showToast('Removed from Saved Wardrobe');
    } else {
      setWishlistIds([...wishlistIds, productId]);
      showToast('Added to Saved Wardrobe Reserve');
    }
  };

  const handleAddToCart = (product, size = 'S', qty = 1, color = 'Standard') => {
    const cartItemId = product.id + '-' + size;
    const existingIndex = cartItems.findIndex(item => item.id === cartItemId);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].qty += qty;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, {
        id: cartItemId,
        title: product.title,
        color: color,
        size: size,
        price: product.price,
        qty: qty,
        image: product.images ? product.images[0] : 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
      }]);
    }
    showToast(`✓ ${product.title} added to Bag`);
  };

  const updateCartQty = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeCartItem = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    if (itemToRemove) {
      showToast(`Removed ${itemToRemove.title} from Bag`);
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.qty, 0);
  const totalWishlistCount = wishlistIds.length;

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 shadow-xl font-label text-xs uppercase tracking-wider flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Compact Header */}
      <Header 
        cartCount={totalCartCount}
        wishlistCount={totalWishlistCount}
        openCart={() => setIsCartOpen(true)}
        user={user}
        onGoogleSignIn={handleGoogleSignIn}
        onSignOut={handleSignOut}
      />

      {/* Page Body */}
      <main className="flex-1 w-full pt-28">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                products={products}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
              />
            } 
          />
          <Route 
            path="/lookbooks" 
            element={<LookbookPage />} 
          />
          <Route 
            path="/category/:categorySlug" 
            element={
              <CategoryPage 
                products={products}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
              />
            } 
          />
          <Route 
            path="/product/:productId" 
            element={
              <ProductDetailPage 
                products={products}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onOpenSizeModal={() => setIsSizeModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/wishlist" 
            element={
              <WishlistPage 
                products={products}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProfilePage 
                user={user}
                onSignOut={handleSignOut}
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                cartItems={cartItems}
                onClearCart={() => setCartItems([])}
              />
            } 
          />
          <Route 
            path="/vip-salon" 
            element={<VipPortalPage />} 
          />
        </Routes>
      </main>

      {/* Streamlined Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQty={updateCartQty}
        removeItem={removeCartItem}
        onProceedCheckout={handleProceedCheckout}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={isSizeModalOpen}
        onClose={() => setIsSizeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
