import { createGlobalStyle } from "styled-components";
import { Headline } from "./Typography";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;

        --color-gray-0: #F5F5F5;
        --color-gray-100: #E0E0E0;        
        --color-gray-300: #828282;
        --color-gray-600: #333333;
        
        --color-information: #155BCB
        --color-sucess: #168821;
        --color-warning: #FFCD07;
        --color-negative: #E60000;
    }

    *{
        margin: 0;
        border: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
    }   
    
    button{
        cursor: pointer;

        background: transparent;

        border: none;

        ${ Headline }
    }

    ul, ol{
        list-style: none;
    }

    input, textarea{        
        background: transparent;
    }

    body{
        height: 100vh;       
        
    }

    main{
        width: 90%;

        margin: 3rem auto;        
    }
`

export default GlobalStyles