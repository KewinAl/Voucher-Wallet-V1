import styled from "styled-components";

export const CouponContainer = styled.div`
  display: flex;
  flex: 0 0 270;

  width: 100%;
`;

export const RedeemButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  height: 50%;
  width: 60%;
`;

export const LeftContainer = styled.div`
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 70%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.borderRadiusXL};
  position: relative;
  box-shadow: -30px 10px 89px -36px rgba(0, 0, 0, 0.208);

  ::after {
    content: "";
    position: absolute;
    right: -3px;
    top: 10px;
    bottom: 10px;
    border-right: dotted #ffffff 6px;
    width: 6px;
  }
`;

export const OurLogo = styled.img`
  height: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: radial-gradient(black, transparent);
`;

export const CompanyLogo = styled.img`
  min-height: 40px;
  max-height: 60px;
  position: absolute;
  padding: 0 20px;
  top: 10px;
  right: 20px;
  border-radius: 6px;
  background: white;
`;

export const Amount = styled.h4`
  font-size: ${(p) => p.theme.fontSizeXXXXL};
  font-family: "Oswald", sans-serif;
  line-height: 50px;
  transform: rotate(-10deg);
  color: white;
  font-weight: bold;
  background: #1cc0f6;
  padding: 5%;
  border-radius: 60%;
  width: auto;
`;

export const CompanyName = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: ${(p) => p.theme.fontSizeXL};
  color: white;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
`;

export const Expiration = styled.p`
  position: absolute;
  bottom: 16px;
  right: 20px;
  color: white;
  font-size: ${(p) => p.theme.fontSizeM};

  code {
    font-weight: bold;
    font-size: ${(p) => p.theme.fontSizeXL};
    margin-left: 6px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 30%;
  padding: 10px;
  border-radius: ${(p) => p.theme.borderRadiusXL};
  box-shadow: 10px 10px 89px -36px rgba(0, 0, 0, 0.276);
`;

export const CouponTitle = styled.h1`
  font-size: ${(p) => p.theme.fontSizeXL};
  font-weight: bold;
  color: black;
`;

export const CodeSection = styled.section`
  border: solid orange 3px;
  border-radius: 4px;
  height: 35%;
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    height: 20px;
    font-size: ${(p) => p.theme.fontSizeM};
    width: 60%;
    background: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    left: 10px;
    color: black;
  }

  code {
    font-family: "Miriam Libre", sans-serif;
    font-size: ${(p) => p.theme.fontSizeXXL};
    font-weight: bold;
  }
`;

export const Description = styled.p`
  font-size: ${(p) => p.theme.fontSizeL};
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  width: 80%;
  height: 40%;

  small {
    font-size: ${(p) => p.theme.fontSizeXS};
  }

  a {
    font-size: ${(p) => p.theme.fontSizeL};
    color: orange;
    font-weight: bold;
  }
`;
