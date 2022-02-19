import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const Cadastro = (id, ...props) => {
  const [identifier, setIdentifier] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");

  const onChangeIdentifier = (event) => {
    localStorage.setItem("identifier", event.target.value);

    setIdentifier(event.target.value);
  };
  const onChangePreco = (event) => {
    localStorage.setItem("identifier", event.target.value);

    setPreco(event.target.value);
  };
  const onChangeQuantidade = (event) => {
    localStorage.setItem("identifier", event.target.value);

    setQuantidade(event.target.value);
  };


  const handleClick = (event) => {

    localStorage.setItem("identifier", identifier);
    localStorage.setItem("preco", preco);
    localStorage.setItem("quantidade", quantidade);

    setIdentifier('');
    setPreco('');
    setQuantidade('');
  }

  return (
    <Box className="caixa">
      <Typography className="margin" align="center" variant="h4">
        Cadastro de Entregas
      </Typography>
      <div className="">
        <TextField
          className="textfield"
          type="text"
          value={identifier}
          label="Identificação"
          onChange={onChangeIdentifier}
          fullWidth
        />
        <div className="">
          <TextField
            className="textfield"
            type="number"
            value={preco}
            label="Preço"
            onChange={onChangePreco}
            margin="normal"
          />
          <TextField
            className="textfield"
            type="number"
            value={quantidade}
            label="Quantidade"
            onChange={onChangeQuantidade}
            margin="normal"
          />
        </div>
      </div>
      <Button className="margin" variant="contained" onClick={handleClick} fullWidth>
        Salvar
      </Button>
    </Box>
  );
};

export default Cadastro;
