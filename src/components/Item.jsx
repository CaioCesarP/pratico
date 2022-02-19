import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = () => {
  return (
    <tbody>
      <tr className="entrega">
        <td className="id">model</td>
        <td>model</td>
        <td>model</td>
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
