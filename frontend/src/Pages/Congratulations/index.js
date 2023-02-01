import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ConfirmationContainer, CongratulationsPage} from "./Congratulations.styles";

const Congratulations = () =>{
    const navigate = useNavigate()
    useEffect(() => {
    setTimeout(() => {
      navigate('/verification');
    }, 30000);
  }, []);

     return (
        <>
        <CongratulationsPage>
            <ConfirmationContainer>
            <h2>REGISTRATION</h2>
                <hr></hr>
            <p>Thanks for your registration at Voucher Wallet.
            You will receive the confirmation Email shortly.</p>
            </ConfirmationContainer>
        </CongratulationsPage>
        </>
    )
}

export default Congratulations

