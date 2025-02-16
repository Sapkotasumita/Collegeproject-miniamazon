import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../lib/axios.instance";
import DeleteProductDialog from "../components/DeleteProductDialog";
const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/product/detail/${params.id}`);
        setLoading(false);
        const product = res.data?.productDetails;
        setProductDetails(product);
      } catch (error) {
        setLoading(false);
        console.log("Get product detail api hit failed...");
        console.log(error);
      }
    };

    getProductDetails();
  }, []);

  if (loading || deleteLoading) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "3rem",
        margin: {
          xs: "none",
          md: "3rem",
        },
        boxShadow: {
          xs: "none",
          sm: "none",
          md: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      }}
    >
      <Box sx={{ background: "red" }}>
        <img
          src={
            productDetails?.image ||
            "https://cdn.thewirecutter.com/wp-content/media/2023/04/tv-buying-guide-2048px-0032.jpg?auto=webp&quality=75&width=1024"
          }
          alt={productDetails.name}
          height={"100%"}
          width={"100%"}
        />
      </Box>

      <Stack
        sx={{
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">{productDetails.name}</Typography>
        <Chip
          label={productDetails.brand}
          variant="contained"
          color="warning"
        />

        <Typography variant="h6">Price:${productDetails.price}</Typography>
        <Typography variant="h6">
          Available Quantity:{productDetails.quantity}
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h6">Category:</Typography>
          <Chip
            label={productDetails.category}
            variant="contained"
            color="warning"
          />
        </Box>

        <Typography
          sx={{
            textAlign: "justify",
            lineHeight: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          {productDetails.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<EditIcon />}
            onClick={() => {
              navigate(`/edit-product/${params.id}`);
            }}
          >
            Edit
          </Button>

          <DeleteProductDialog />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
