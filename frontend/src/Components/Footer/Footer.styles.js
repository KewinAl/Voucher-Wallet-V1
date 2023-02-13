import styled from "styled-components";


export const FooterUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  height: 56px;
  background: ${p => p.theme.backgroundPurpleLight};
`;


export const Navbar = styled.div`

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    padding-left: 50px;
  }

  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-decoration: none;
    color: white;
  }

  a:hover {
    cursor: pointer;
  }
`;


export const SocialMedia = styled.div`
  display: flex;


  img {
    padding: 5px;
    width: 40px;
    height: 40px;
    color: white;
  }

  img:hover {
    cursor: pointer;
  }

`;

export const MainFooter = styled.div`
  flex-direction: column;
  height: 80px;
  display: flex;


  p {
    margin: 0px;
    padding-left: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  
  }
`;

