import styled from "styled-components";

export const OverlayDiv = styled.div`
        width: 900px;
        height: 600px;
        background-color: white;
        border: 1px solid #cccccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        >h1 {
            font-size: 70px;
            border-bottom: 2px solid gray;
        }
        >form{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 35px;
            width: 70%;
            height: 80%;
            padding: 25px;
            >div{
                display: flex;
                padding: 20px;
                gap: 20px;
                >input {
                    width: 20%;
                }
            }
            >button {
                width: 70%;
                padding: 15px;
                margin: auto;
            }
        }
    }
`;