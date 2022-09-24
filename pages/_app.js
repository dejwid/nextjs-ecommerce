import '../styles/globals.css'
import {ProductsContextProvider} from "../components/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  );
}

export default MyApp
