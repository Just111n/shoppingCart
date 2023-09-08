import React, { useEffect } from "react";
import { fetchProductsStart } from "../../features/products/productsSlice";
import { ProductProps } from "../../components/ProductListItem/ProductListItem";
import { useState } from "react";
import { TProduct } from "../../features/products/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { CartItem, addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    ProductProps["product"] | null
  >(null);

  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const handleProductClick = (product: ProductProps["product"]) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (productAddedToCart: CartItem) => {
    dispatch(addToCart(productAddedToCart));
    toast.success("Item added to cart", {
      autoClose: 1000,
      position: "bottom-center",
      pauseOnHover:false,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Box display="flex" gap="16px">
        <Box flex="1">
          {selectedProduct ? (
            <ProductDetailCard
              product={selectedProduct}
              onAddToCart={handleAddToCart}
            />
          ) : (
            <Box>Select a product to view details</Box>
          )}
        </Box>

        <Box flex="1" display="grid" gridTemplateColumns="1fr" gap="16px">
          {products.map((product: TProduct) => (
            <Box
              key={product.productId}
              onClick={() => handleProductClick(product)}
            >
              <ProductListItem product={product} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductsPage;
