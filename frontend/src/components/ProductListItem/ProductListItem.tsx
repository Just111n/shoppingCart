import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField,
} from "@mui/material";

export type ProductProps = {
  product: {
    productId: string;
    productName: string;
    description: string;
    imageUrl: string;
    price: number;
  };
};

const ProductListItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card>
      <CardActionArea>
        <div style={{ display: "flex" }}>
          <CardMedia
            component="img"
            width="50%"
            image={product.imageUrl}
            alt={product.productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6">${product.price}</Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ProductListItem;
