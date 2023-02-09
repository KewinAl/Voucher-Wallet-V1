import {Link} from "react-router-dom";
import Google from "../../Assets/googleplus.svg";
import Instagram from "../../Assets/instagram.svg";
import Facebook from "../../Assets/facebook.svg";
import Twitter from "../../Assets/twitter.svg";
import {FooterUp, MainFooter, Navbar, SocialMedia} from "./Footer.styles";

const Footer = () => {
    return (
        <>
            <MainFooter>
                <FooterUp>
                    <Navbar>
                        <div>
                            <Link to="/">About Us</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">iOS</Link>
                            <Link to="/">Android</Link>
                        </div>
                    </Navbar>
                    <SocialMedia>
                        <img src={Facebook}/>
                        <img src={Twitter}/>
                        <img src={Google}/>
                        <img src={Instagram}/>
                    </SocialMedia>
                </FooterUp>
                <p>© Copyright Voucher Wallet 2023</p>
            </MainFooter>
        </>
    );
};
export default Footer;




