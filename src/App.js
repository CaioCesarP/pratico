import { Button, Container, Divider } from "@mui/material";
import React, { Component } from "react";

import GlobalStyle from "./css/GlobalStyle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lista de Entregas",
      act: 0,
      index: "",
      datas: [],
    };
  }

  componentDidMount() {
    this.refs.produto.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    if(this.refs.produto.value !== '' && this.refs.local.value !== ''){
      let datas = this.state.datas;
      let produto = this.refs.produto.value;
      let local = this.refs.local.value;

      if (this.state.act === 0) {
        let data = {
        produto,
        local,
      };
        datas.push(data);
      } else {
        let index = this.state.index;
        datas[index].produto = produto;
        datas[index].local = local;
      }

      this.setState({
        datas: datas,
        act: 0,
      });

      this.refs.myForm.reset();
      this.refs.produto.focus();
    } else {
      
    }
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.produto.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.produto.value = data.produto;
    this.refs.local.value = data.local;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.produto.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <Container>
        <GlobalStyle />
        <div className="App">
          <h2>{this.state.title}</h2>
          <Divider className="gap" />
          <form ref="myForm" className="myForm">
            <input
              type="text"
              ref="produto"
              placeholder="Produto de entrega"
              className="formInput"
            />
            <input
              type="text"
              ref="local"
              placeholder="Local da entrega"
              className="formInput"
            />
            <Button
              variant="outlined"
              onClick={(e) => this.fSubmit(e)}
              className="myButton"
            >
              cadastrar{" "}
            </Button>
          </form>
          <pre>
            {datas.map((data, i) => (
              <li key={i} className="myList">
                {i + 1}. {data.produto}, {data.local}
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
            ))}
          </pre>
        </div>
      </Container>
    );
  }
}

export default App;
