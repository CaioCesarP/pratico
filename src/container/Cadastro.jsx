import React from "react";
import { Button, TextField, Typography } from "@mui/material";

const Cadastro = () => {
  const [identifier, setIdentifier] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [local, setLocal] = React.useState("");

  const onChangeIdentifier = (event) => {

    setIdentifier(event.target.value);
  };
  const onChangePreco = (event) => {

    setPreco(event.target.value);
  };
  const onChangeLocal = (event) => {

    setLocal(event.target.value);
  };


  const handleSubmit = (event) => {
    if(identifier !== '' && preco !== '' && local !== ''){
      localStorage.setItem("identifier", identifier);
    localStorage.setItem("preco", preco);
    localStorage.setItem("local", local);
    } else {
      alert('Por favor preencha os determinantes.');
      return;
    };
  }

  return (
    <form onSubmit={handleSubmit} className="caixa">
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
            type="text"
            value={local}
            label="Local"
            onChange={onChangeLocal}
            margin="normal"
          />
        </div>
      </div>
      <Button type='submit' className="margin" variant="contained" fullWidth>
        Salvar
      </Button>
    </form>
  );
};

export default Cadastro;
