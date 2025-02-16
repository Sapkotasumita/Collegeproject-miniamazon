import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../lib/axios.instance";

const DeleteProductDialog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteProduct = async () => {
    try {
      setDeleteLoading(true);
      await axiosInstance.delete(`/product/delete/${params.id}`);
      navigate("/");
    } catch (error) {
      console.log("Delete product api hit failed...");
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="error"
        startIcon={<DeleteOutlineIcon />}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this product?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Product once deleted cannot be restored. This process is
            irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success" variant="contained">
            No
          </Button>
          <Button
            onClick={() => {
              deleteProduct();
              handleClose();
            }}
            autoFocus
            color="error"
            variant="contained"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteProductDialog;
