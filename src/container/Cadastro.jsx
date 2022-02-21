import React from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

const Cadastro = (onSave) => {
  const [identifier, setIdentifier] = React.useState("");
  const [cliente, setCliente] = React.useState("");
  const [local, setLocal] = React.useState("");

  const onChangeIdentifier = (event) => {
    setIdentifier(event.target.value);
  };
  const onChangecliente = (event) => {
    setCliente(event.target.value);
  };
  const onChangeLocal = (event) => {
    setLocal(event.target.value);
  };

  const handleClick = (event) => {
    if (identifier !== "" && cliente !== "" && local !== "") {
      localStorage.setItem("identifier", identifier);
      localStorage.setItem("cliente", cliente);
      localStorage.setItem("local", local);

      onSave({ identifier, cliente, local });
      console.log(onSave);
      window.location.reload();
    } else {
      alert("Por favor preencha os campos.");
      return;
    }
  };

  return (
    <Box className="caixa">
      <Typography className="margin" align="center" variant="h4">
        Cadastro de Entregas
      </Typography>
      <div className="">
        <TextField
          className="textfield"
          value={identifier}
          label="descrição"
          onChange={onChangeIdentifier}
          fullWidth
        />
        <div className="">
          <TextField
            className="textfield"
            value={cliente}
            label="cliente"
            onChange={onChangecliente}
            margin="normal"
          />
          <TextField
            className="textfield"
            value={local}
            label="Local"
            onChange={onChangeLocal}
            margin="normal"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="margin"
        variant="contained"
        onClick={handleClick}
        fullWidth
      >
        Salvar
      </Button>
    </Box>
  );
};

export default Cadastro;
