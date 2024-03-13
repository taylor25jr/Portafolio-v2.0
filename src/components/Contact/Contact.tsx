import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <Link to="mailto:luisdavidferrerconde@gmail.com"><img src={emailIcon} alt="Email" /></Link> 
          <Link to="mailto:luisdavidferrerconde@gmail.com">Enviame un correo</Link>
        </div>
        <div>
        <Link to="tel:+573008559576"><img src={phoneIcon} alt="Phone No" /></Link>
          <Link to="tel:+573008559576">(+57) 3008559576</Link>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}