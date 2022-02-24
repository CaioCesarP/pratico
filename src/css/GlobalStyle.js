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

.icone {
    display: inline;
    vertical-align: middle;
    font-size: 28px;
    margin-right: 0.3rem;
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

.formInputI {
    border: 1px solid #46bf00;
}

.formInputII {
    border: 1px solid #d1bc00;
}

.formInputI, .formInputII {
    font-size: 14px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border-radius: 5px;
    box-sizing: border-box;
}

.vazio {
    background-color: red;
    text-align: center;
    border: 1px solid black;
    border-radius: 14px;
    padding: 0.4rem;
    padding-top: 0.5 rem;
}

pre {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: auto;
    background-color: #e9e9e9;
    padding: 0.4rem;
}

.myButton {
    width: 100%;
    padding: 0.5rem ;
    margin: 0.5rem 0;
}

.myList {
    display: flex;
    flex-direction: column;
}

.myItem {
    padding: 0.5rem;
    transition: 0.6s all;
}

.myItem:hover {
    font-size: 16px;
    color: #5b2880;
}



// animação do item
@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

.swing:hover
{
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
`;

export default GlobalStyle;
