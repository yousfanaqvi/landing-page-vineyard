import React,{useRef} from 'react'
import "./Home.css"
import "./form.css"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from 'emailjs-com';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function Contact() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ukztntd', 'template_4rl35o9', form.current, 'JtcjoysPABtO-K2cj')
          .then(() => {
              handleClickOpen();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          
      };
  return (
    <div className='contact-section' id='contact'>
    <h2>CONTACT FORM</h2>
    <div className='contact-container'>
        <div className='contact-content'>
        <div className='contact_options'>
            <article className='contact_opt'>
            <h4>LOCATION</h4>
            <p>456 jackson street, <br/>Avenel 984567, IL</p>
            <span>
                <a href="https://www.facebook.com/" target='_blank'><FacebookIcon/></a>
                <a href="https://twitter.com/" target='_blank'><TwitterIcon/></a>
                <a href='https://www.instagram.com/' target='_blank'><InstagramIcon/></a>
            </span>
          </article>
          <article className='contact_opt'>
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>vinetrek@email.com</h5>
            <a href="mailto:yousfayahya@gmail.com">Send a message</a>
          </article>
          <article className='contact_opt'>
            <AiOutlinePhone className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>948-999-8839</h5>
            <a href="https://api.whatsapp.com" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your name"
           required/>
          <input type="email" name="email" placeholder='Enter your email'
           required/>
          <textarea name="message" rows="10" placeholder="Enter message" 
           required></textarea>
          <div  align="right">
          <button type='submit' name="submit" className='reserve-button ' >Send Message</button>
          </div>
        </form>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been sent</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
    </div>
  )
}

export default Contact