import { Box, Table, Typography, Divider } from "@mui/material";
import Item from "../components/Item";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AssignmentIcon from '@mui/icons-material/Assignment';

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
            <th><AssignmentIcon />Identificação<AssignmentIcon /></th>
            <th><AttachMoneyIcon />Preço<AttachMoneyIcon /></th>
            <th><LocationOnIcon />Local<LocationOnIcon /></th>
            <th><IndeterminateCheckBoxIcon />Actions<IndeterminateCheckBoxIcon /></th>
          </tr>
        </thead>
        <Item />
      </Table>
      <Divider />
    </Box>
  );
};

export default Lista;
