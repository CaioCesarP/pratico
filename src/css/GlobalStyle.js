import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
body {
    font-family: 'Open Sans', sans-serif;
}

container {
    margin-top: 3rem;
}

.cabeca {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

divider {
    margin-bottom: 2rem;
}

.visor{
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
}

.caixa {
    margin-right: 2vw;
}

.margin {
    margin-bottom: 2.25rem;
}
.textfield {
    display: flex;
    flex-wrap: wrap;
}

thead {
    background-color: #acacac;
    justify-content: space-around
    display: table;
    width: 100%;
}

.tabela {
    border-left: 1px solid #808080;
    border-right: 1px solid #808080;
    table-layout:fixed;
}

.entrega {
    border-left: 1px solid #808080;
    border-right: 1px solid #808080;
    width: 100vw;
}

tr {
    margin-bottom: 10px;
}

.id {
    padding-left: 2.37rem;
}

th {
    padding-left: 1.5rem;
    padding-right: 1.5rem
}

td {
    padding-left: 1.4rem;
    padding-right: 0.8rem;
}


@media screen and (min-width: 1000px) {
    .visor{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
}


input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}   
input[type=number] { 
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: textfield;
}
`;

export default GlobalStyle;
