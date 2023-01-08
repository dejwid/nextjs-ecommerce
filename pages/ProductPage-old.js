// import React from "react";
// import { useRouter } from "next/router";
// import products from "../data/products.json";

// const ProductPage = ({ product }) => {
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//     </div>
//   );
// };

// export default ProductPage;

// export async function getStaticPaths() {
//   // Get all the product handles
//   const productHandles = products.map((product) => product.handle);

//   // Return the paths to all the product pages
//   return {
//     paths: productHandles.map((handle) => ({ params: { handle } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // Find the product with the matching handle
//   const product = products.find((product) => product.handle === params.handle);

//   // Return the product data as props
//   return {
//     props: {
//       product,
//     },
//   };
// }
