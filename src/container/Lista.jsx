import React from "react";
import { Box, Table, Typography, Divider } from "@mui/material";
import Item from "../components/Item";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Lista = () => {
  return (
    <Box className="caixa">
      <div>
        <Typography className="margin" align="center" variant="h4">
          Lista de Entregas
        </Typography>
      </div>
      <Table className="tabela" size="small" textAlign="center">
        <thead>
          <tr>
            <th>
              <AssignmentIcon />
              descriçao
              <AssignmentIcon />
            </th>
            <th>
              <PersonIcon />
              Cliente
              <PersonIcon />
            </th>
            <th>
              <LocationOnIcon />
              Local
              <LocationOnIcon />
            </th>
            <th>
              <IndeterminateCheckBoxIcon />
              Ações
              <IndeterminateCheckBoxIcon />
            </th>
          </tr>
        </thead>
        <Item />
      </Table>
      <Divider />
    </Box>
  );
};

export default Lista;
