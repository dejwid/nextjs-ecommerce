import "../styles/globals.css";
// import "../styles/css/navigation.css";
import "../styles/css/components.css";
import "../styles/css/normalize.css";
import "../styles/css/three-sisters-two.css";
import { ProductsContextProvider } from "../components/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  );
}

export default MyApp;
