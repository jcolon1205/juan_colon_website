import "./Contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {

const handleSubmit =(form)=>{
form.preventDefault();




    emailjs.sendForm('gmail', 'template_d8p5y9d', form.target, 'user_pvfrHm8hwMoQ7GQ1aqk23')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Message will be Sent")

      
      form.target.reset()
    }


    
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/shakeHands.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>                    
                   <input type="text" name = "Email" placeholder="Email"/> 
                   <textarea name = "Message" placeholder="Message"></textarea>
                   <button type="Submit">Send</button>
                   {/*{message && <span>Thanks, I will reply ASAP. </span>}*/}
                </form>
            </div>
        </div>
    )
}