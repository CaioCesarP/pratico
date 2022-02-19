import React from "react";
import { Container, Divider, Typography, IconButton } from "@mui/material";
import Cadastro from "../container/Cadastro";
import Lista from "../container/Lista";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import GlobalStyle from "../css/GlobalStyle";

const Home = () => {
  return (
    <Container>
      <GlobalStyle />
      <div className="cabeca">
        <IconButton id="leftMenu" disabled color="info" size="large">
          <LocalShippingIcon />
        </IconButton>
        <Typography align="center" variant="h3">
          Entregas App
        </Typography>
      </div>
      <Divider />
      <div className="visor">
        <Cadastro />
        <Lista />
      </div>
    </Container>
  );
};

export default Home;
