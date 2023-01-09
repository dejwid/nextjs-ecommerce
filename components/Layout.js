import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import FooterNew from "./LayoutComponents/FooterNew";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <div className="page-wrapper">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      {/* <Footer /> */}
      <FooterNew />
    </div>
  );
}
