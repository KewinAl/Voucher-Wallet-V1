import React from "react"
import { useNavigate } from "react-router-dom";
import { Background, HeroSubTitle, HeroTitle, LandingPageContainer, LangingImage } from "./landing.style"
import voucher from "../../Assets/voucher.png"
import { Button } from "../../styles/button"

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <LandingPageContainer>
            <Background/>
            <HeroTitle>
                Create <i>COUPONS</i> and Get <b>Full-Control </b>of your Campaigns
                <HeroSubTitle>
                    Create unique coupons for your client targets, track its reedemtion and forge loyalty with those client you want.
                </HeroSubTitle> 
                <Button onClick={() => navigate("/login")}>Get Started!</Button>
            </HeroTitle>
          
            <LangingImage src={voucher}></LangingImage>
        </LandingPageContainer>
    )
}
export default LandingPage