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

h2 {
    text-align: center;
    margin: 2rem;
}

.gap {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.app, .myForm {
    display: flex;
    flex-direction: column;
}

.app {
    margin: auto;
    width: 50%;
}

.myForm {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #dfe6e9;
    border-radius: 5px;
    padding: 20px;
}

.formInput {
    font-size: 14px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.myButton {
    width: 100%;
    padding: ;
    margin: 8px 0;
}

.myList {
    display: flex;
    flex-direction: column;
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
