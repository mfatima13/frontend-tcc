import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        
        --color-background: #E6E6E6;
        --color-input-login: #C4C4C4;
        --color-text: #828282;
        --color-btn-login: #9E1946;
        --color-btn-login-dark: #91153C;
        --color-text-btn-login: #E6E6E6;

        --color-menu-barra: #9E1946;
        --color-submenu-barra: #A33057;
        --color-text-barra: #E6E6E6;
        --color-line: #A59494;

        --color-items: #FFFFFF;
        --color-btn-new: #FFFEFE;
        --color-btn-new-dark: #E7E7E7;
        --color-btn-hover: #F1EDF2;
        --color-border-items: #ACACAC;
        --color-text-items: #6A6969;
        --color-btn-submenu: #C3587C;
        --color-text-btn-submenu: #E9ECEB;
        
        --color-todo-background: #CFCFCF;
        --color-todo-text: #484848;
        --color-task-background: #D9DFDD;
        --color-task-title: #3A3A3A;
        --color-task-barra: #8F8F8F;
        --color-task-text: #535353;

    
        font-size: 60%;
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: var(--color-background);
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

`;