import { Box, Table, Typography, Divider } from "@mui/material";
import Item from "../components/Item";

const Lista = () => {
  return (
    <Box className="caixa">
      <div>
        <Typography className="margin" align="center" variant="h4">
          Lista de Produtos
        </Typography>
      </div>
      <Table className="tabela" size="small" textAlign="center">
        <thead>
          <tr>
            <th>Identificação</th>
            <th>Preço</th>
            <th>Qtde.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <Item />
        <Item />
        <Item />
        <Item />
      </Table>
      <Divider />
    </Box>
  );
};

export default Lista;
