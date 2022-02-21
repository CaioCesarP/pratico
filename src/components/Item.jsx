import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = () => {
  const [storageIdentifier, setStorageIdentifier] = React.useState("");
  const [storageCliente, setStorageCliente] = React.useState("");
  const [storageLocal, setStorageLocal] = React.useState("");

  React.useEffect(() => {
    setStorageIdentifier(localStorage.getItem("identifier"));

    setStorageCliente(localStorage.getItem("cliente"));

    setStorageLocal(localStorage.getItem("local"));
  }, [storageIdentifier, storageCliente, storageLocal]);

  const lista = [];

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <tbody>
      {lista.map((item) => {
        return (
          <tr key={item.id} className="entrega">
            <td>{item.identifier}</td>
            <td>{item.cliente}</td>
            <td>{item.local}</td>
            <td>
              <Button
                size="small"
                color="secondary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                edit
              </Button>
              <Button
                size="small"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                del
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Item;
