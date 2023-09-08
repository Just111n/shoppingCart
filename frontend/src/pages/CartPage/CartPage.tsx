import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import { checkoutCartStart } from "../../features/cart/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../../features/cart/cartSlice";

const CartPage: React.FC = () => {
  const navigate = useNavigate(); 
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    dispatch(checkoutCartStart({ cart }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom textAlign={"center"}>
        My Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <List>
          {cart.map((item) => (
            <ListItem key={item.productId}>
              <ListItemText
                primary={item.productName}
                secondary={`Quantity: ${item.quantity} x $${item.price.toFixed(
                  2
                )}`}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() =>
                  dispatch(removeFromCart({ productId: item.productId }))
                }
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <Divider variant="middle" />
      <Typography variant="h6" gutterBottom>
        Total Cost: ${totalCost.toFixed(2)}
      </Typography>
      <Box display="flex" flexDirection={"column"}>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </Button>
      </Box>
    </div>
  );
};

export default CartPage;
