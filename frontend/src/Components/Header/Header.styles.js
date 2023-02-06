import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-inline: 2rem;
  position: relative;
  padding: 0 0;
  background-color: green;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    display: flex;
  }
`

export const Coupon = styled.div`
  width: 300px;
  height: 60px;
  display: flex;

  h3 {
    width: 100%;
    height: 40px;
    font-size: 25px;
    font-weight: 300;
    font-family: "Rage Italic";
  }

  img {
    padding: 10px;
    height: 40px;
    width: 40px;
    align-content: center;
  }

`
export const HeaderRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .Search {
    height: 30px;
    width: 400px;
    border: 1px solid grey;
    border-radius: 20px;
    margin-right: 20px;

  }


`
export const Navbar = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    position: relative;
    right: 50px;


  }

  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4A4A4A;

  }


  a.active {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4A4A4A;

  }

`

export const Buttons = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;

  #signup {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  #login {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  button {
    display: flex;
    width: 100px;
    height: 40.57px;
    border: none;
    font-size: 16px;
    background-color: #e47d31;
    line-height: 18.75px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

  }

  button:hover {
    cursor: pointer;
  }


`;
