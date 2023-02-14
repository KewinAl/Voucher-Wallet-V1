import styled from "styled-components";


export const TagButton = styled.button`
    background-color: slateblue;
    color: white;
    border-radius: 25px;
    padding: 0px 15px;
    border: 1px solid mediumslateblue;
    height: 30px;
`

export const TagOverlayDiv = styled.div`
    background-color: white;
    border-radius: 30px;
    width: 1000px;
    height: 600px;
    border: solid 2px #cccccc;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.51);
    overflow: hidden;
    z-index: 3; 
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

>div {
    height: 100%;
    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
        >h1,h2 {
            font-size: x-large;
        }
        >div {
            height: 40%;
            width: 70%;
            padding-top: 30px;
        }
    }
`
export const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 5px;
`