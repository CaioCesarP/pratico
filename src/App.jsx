import { Button, Container, Divider, Typography } from "@mui/material";
import React, { Component } from "react";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import GlobalStyle from "./css/GlobalStyle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icone: <LocalShippingIcon className="icone" />,
      title: "Lista de Entregas", //Título do projeto
      act: 0, //Determinante para cadastrar ou atualizar
      index: "", //Estado do index
      datas: [], //Array com as datas
    };
  }

  componentDidMount() {
    //Componente montado
    this.refs.produto.focus(); //Produto focado
  }

  fSubmit = (e) => {
    e.preventDefault();
    if (this.refs.produto.value !== "" && this.refs.local.value !== "") {
      //Regra para acontecer submit
      let datas = this.state.datas;
      let produto = this.refs.produto.value;
      let local = this.refs.local.value;

      if (this.state.act === 0) {
        //Tendo act como 0, padrão, submit ira cadastrar
        let data = {
          produto,
          local,
        };
        datas.push(data);
      } else {
        //Tendo act diferente de 0, submit ira atualizar
        let index = this.state.index;
        datas[index].produto = produto; //Index sendo atualizado pelo THIS do fEdit
        datas[index].local = local; //Index sendo atualizado pelo THIS do fEdit
      }

      this.setState({
        //Reconfigura datas e act
        datas: datas,
        act: 0,
      });

      this.refs.myForm.reset(); //Limpa os campo input
      this.refs.produto.focus(); //Volta ao foco principal produto
    } else {
      alert("Preencha os dados para o cadastro");
      this.refs.produto.focus();
    }
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1); //Utilizado splice, pega o [i] -> 2. carne, Boi&Cia; 2=i, retirando assim 1 item do array data começando pelo i
    this.setState({
      //Reconfigurando datas
      datas: datas,
    });

    this.refs.myForm.reset(); //Limpa os campos input
    this.refs.produto.focus(); //Volta ao foco principal produto
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.produto.value = data.produto; //Retorna value do produto do referente THIS
    this.refs.local.value = data.local; //Retorna value do local do referente THIS

    this.setState({
      //Reconfigura act e index, ligado com o submit
      act: 1,
      index: i,
    });

    this.refs.produto.focus(); //Volta ao foco principal produto
  };

  render() {
    let datas = this.state.datas;
    return (
      <Container>
        <GlobalStyle />
        <div className="App">
          <h2>
            {this.state.icone}
            {this.state.title}
          </h2>
          <Divider className="gap" />
          <form ref="myForm" className="myForm">
            {this.state.act === 0 ? (
              <>
                <input
                  type="text"
                  ref="produto"
                  placeholder="Produto de entrega"
                  className="formInputI"
                />
                <Typography variant="caption">
                  Informar o produto para que aconteça a entrega.
                </Typography>
                <input
                  type="text"
                  ref="local"
                  placeholder="Local da entrega"
                  className="formInputI"
                />
                <Typography variant="caption">
                  Informar o destino para que aconteça a entrega.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={(e) => this.fSubmit(e)}
                  className="myButton"
                >
                  cadastrar{" "}
                </Button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  ref="produto"
                  placeholder="Produto de entrega"
                  className="formInputII"
                />
                <Typography variant="caption">
                  Informar o produto para que aconteça a entrega.
                </Typography>
                <input
                  type="text"
                  ref="local"
                  placeholder="Local da entrega"
                  className="formInputII"
                />
                <Typography variant="caption">
                  Informar o destino para que aconteça a entrega.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={(e) => this.fSubmit(e)}
                  className="myButton"
                >
                  atualizar{" "}
                </Button>
              </>
            )}
          </form>
          <pre>
            {datas.length === 0 ? (
              <Typography variant="h4" color="darkblue" className="vazio">
                SEM REGISTRO
              </Typography>
            ) : (
              datas.map((data, i) => (
                <li key={i} className="myList swing">
                  <div class="myItem">
                    {localStorage.setItem(
                      i,
                      `${i + 1}. ${data.produto}, ${data.local}`
                    )}{" "}
                    {localStorage.getItem(i).toLowerCase()}
                  </div>
                  <Button
                    variant="outlined"
                    onClick={() => this.fRemove(i)}
                    className="myButton"
                  >
                    remover{" "}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => this.fEdit(i)}
                    className="myButton"
                  >
                    editar{" "}
                  </Button>
                </li>
              ))
            )}
          </pre>
        </div>
      </Container>
    );
  }
}

export default App;
