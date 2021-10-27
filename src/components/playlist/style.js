import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    height: 750px;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        background: rgba(255, 255, 255, 0.2);
        width: 12px;
        border-radius: 5px;
        overflow: hidden;
        
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 25px;
        height: 80px;
        background: rgba(103, 150, 224, 0.5);
        border: 1px solid rgba(103, 150, 224, 0.9);
        border-radius: 5px;
        box-shadow: inset 5px 5px 2px rgba(255, 255, 255, 0.5); 
      
    }

    ::-webkit-scrollbar-thumb:hover{
        background: rgba(113, 160, 234, 0.9);
    }
    
    h3, p{
        margin: 0;
        padding: 5px;
    }

    h3{
        color: rgba(0, 0, 0, 0.8);
    }

    table{
        border-collapse: collapse;

    }

    tr{
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    }

    a{
        text-decoration: none;
        display: flex;
        position: relative;
        color: #205072;
        font-size: 26px;
        width: 45px;
        height: 45px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .play{
        color: #205072;
        position: relative;
        display: flex;
        font-size: 26px;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        align-items: center;
        justify-content: center;
    }

    a:hover, .play:hover{
        background: rgba(255, 255, 255, 0.2);
    }

    .icon{
        margin: 5px 10px;
        color: #bbb;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
        cursor: pointer;
        font-size: 26px;
        opacity: 0.3;
    }

    img{
        border-radius: 50%;
        margin: 5px 0;
    }

    input[type="checkbox"]{
        display: none;
    }

    input:checked[type="checkbox"] + .icon{
        color: rgb(209, 70, 46);
        opacity: 1;
    }

`