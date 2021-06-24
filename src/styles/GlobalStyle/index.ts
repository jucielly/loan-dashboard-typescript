import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Catamaran', sans-serif;
}
button {
    cursor: pointer;
    text-transform: uppercase;
}
button:focus {
    outline: none;
}
input:focus {
    outline: none;
}
fieldset{
    border: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
ul {
    list-style-type: none;
}

`;
