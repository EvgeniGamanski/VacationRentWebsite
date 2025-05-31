import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_left">
            <a href="/"><img src="/assets/logo.jpg" alt="logo" /></a>
        </div>

        

        <div className="footer_center">
            <h3>Useful Links</h3>
            <ul>
                <li>About Us</li>
                <li>Terms and Conditions</li>
                <li>Return and Refund Policy</li>
            </ul>
        </div>

        <div className="footer_right">
            <h3>Contact</h3>
            <div className="footer_right_info">
                <LocalPhone />
                <p>+358 88 502 5466</p>
            </div>
            <div className="footer_right_info">
                <Email />
                <p>vacationhomes@gmail.com</p>
            </div>
            <img src="/assets/payment_method.png" alt="payment" />
        </div>
    </div>
  )
}

export default Footer