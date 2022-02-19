import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = () => {
  const [storageIdentifier, setStorageIdentifier] = React.useState("");
  const [storagePreco, setStoragePreco] = React.useState("");
  const [storageLocal, setStorageLocal] = React.useState("");

  React.useEffect(() => {
    setStorageIdentifier(localStorage.getItem("identifier"));

    setStoragePreco(localStorage.getItem("preco"));

    setStorageLocal(localStorage.getItem("local"));
  }, [storageIdentifier, storagePreco, storageLocal]);

  return (
    <tbody>
      <tr className="entrega">
        <td>{storageIdentifier}</td>
        <td>R${storagePreco}</td>
        <td>{storageLocal}</td>
        <td>
          <Button size="small" color="secondary" startIcon={<EditIcon />}>
            edit
          </Button>
          <Button size="small" color="secondary" startIcon={<DeleteIcon />}>
            del
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
