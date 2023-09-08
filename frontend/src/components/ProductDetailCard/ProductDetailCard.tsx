// src/components/ProductDetailCard.tsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { TProduct } from "../../features/products/productsSlice";
import { CartItem } from "../../features/cart/cartSlice";

type ProductDetailCardProps = {
  product: TProduct;
  onAddToCart: (productOrdered: CartItem) => void; // Adjust the function signature as needed
};

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    const productAddedToCart: CartItem = {
      ...product,
      quantity,
    };
    onAddToCart(productAddedToCart);
  };

  return (
    <Box>
      <img src={product.imageUrl} alt={product.productName} width="100%" />
      <Typography variant="h5" gutterBottom>
        {product.productName}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6">${product.price.toFixed(2)}</Typography>
      <TextField
        type="number"
        label="Quantity"
        value={quantity}
        onChange={handleQuantityChange}
        variant="outlined"
        fullWidth
        margin="normal"
        inputProps={{ min: 1 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        fullWidth
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductDetailCard;
