import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import DiscountBanner from "./components/DiscountBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductItemPage from "./pages/ProductItemPage";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import ExampleConfetti from "./components/Confeti/ExampleConfetti";
import FixedCart from "./components/Cart/FixedCart/FixedCart";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Faq from "./pages/Faq";
import Wishlist from "./pages/Wishlist";
import { Filter } from "./components/Filter/Filter";
import StarterPopup from "./components/starterPopup/StarterPopup";
import StarterPopupButton from "./components/starterPopup/StarterPopupButton";
import "./App.css";
import { useStarterPopup } from "./components/starterPopup/useStarterPopup";

const App: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = items.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
    return total + price * item.quantity;
  }, 0);

  const {
    timeLeft,
    isMounted,
    isVisible,
    setIsMounted,
    setIsVisible,
    handleClose,
    formatTime,
    showButton,
  } = useStarterPopup();

  return (
    <Router>
      <ScrollToTop />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        {isMounted && (
          <StarterPopup
            isMounted={isMounted}
            setIsMounted={setIsMounted}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            handleClose={handleClose}
            timeLeft={timeLeft}
            formatTime={formatTime}
          />
        )}

        <DiscountBanner />
        <Header />
        <FixedCart />
        {totalPrice > 98 && <ExampleConfetti />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:slug/:index" element={<ProductItemPage />} />
        </Routes>
        <Footer />
        <Cart />

        {showButton && <StarterPopupButton onClick={() => setIsVisible(true)} />}
        <Filter />
      </div>
    </Router>
  );
};

export default App;
