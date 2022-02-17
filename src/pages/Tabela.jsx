import React from "react";

import { List, ListItem, IconButton, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Botao from "./Botao";

const Tabela = () => {
  const [info, setInfo] = React.useState([]);

  const handleDelete = () => {
    console.log('estou aqui?')
  }

  const handleEdit = () => {
    console.log('estou aqui!')
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '2px solid rgba(0, 0, 0, 0.5)', borderRadius: '12px', margin: '2.3rem', padding: '1rem' }}>
      {info.map((value) => {

        return (
          <ListItem
            key={value}
            secondaryAction={
              <div>
                <IconButton onClick={handleEdit} edge="end" aria-label="edit" >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={handleDelete} edge="end" aria-label="delete" >
                  <DeleteIcon />
                </IconButton>
              </div>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemText primary={`| Cliente:  | Produto:  | Prazo:  | `} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Botao info={setInfo} />
    </List>
  )
};

export default Tabela;
