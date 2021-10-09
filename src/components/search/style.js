import styled from "styled-components";

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(35px);
    height: 50px;
    margin: 30px 0;
    display: flex;
    width: 600px;
    padding: 0 5px 0 15px !important;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.4);

    input[type="text"]{
        background: transparent;
        border: none;
        width: 100%;
        height: 50px;
        color: #fefefe;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 5px;
        outline: none;
       
    }
    input[type="text"]::placeholder{
        color: #f2f2f2;
        font-size: 18px;
        font-weight: 200;
        letter-spacing: 1px;
        opacity: 0.4;
    }
    div.fa{
        color: #fff;
        font-size: 18px;
        background: rgba(255, 255, 255, 0.3);
        font-weight: 600;
        padding: 12px;       
        cursor: pointer;
        border-radius: 50%;
        transition: 0.1s ease-in-out;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.4);
    }

    div.fa:hover{
        font-size: 20px;
        padding: 11px;
    }
`;