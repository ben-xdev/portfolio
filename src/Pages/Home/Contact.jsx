import './Contact.css'
import usericon from '../../assets/images/user.svg'
import messageicon from '../../assets/images/message.svg'
import emailicon from '../../assets/images/envelope.svg'


function Contact(){
    return(
        <>
            <section id='Contact' className='ContactSection'>
                <div className='ContactHeader'>Contact Me</div>
                <div className='Contact-info'>Got a question? Send me a message, and I'll get back to you soon</div>
                <form className='form-card'>
                    <div className='form-head'>Get in Touch</div>
                    <div className='name'>
                        <img className='email-name-img' src={usericon} alt="icon" />
                        <input type="text"  placeholder='Your Name' />
                    </div>
                    <div className='email'>
                         <img className='email-name-img' src={emailicon} alt="icon" />
                        <input type="email"  placeholder='Your Email' />
                    </div>
                    <div className='message'>
                        <img className='message-img' src={messageicon} alt="icon" />
                        <textarea name="Message" placeholder='Your Message'></textarea>
                    </div>
                    <button type='button'>Send Message</button>
                </form>
            </section>
        </>
    )
}

export default Contact