import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="contact section reveal" ref={revealRef}>
      <div className="container contact-container">
        <h2 className="section-title-center">
          <span>03.</span> What's Next?
        </h2>
        <h3 className="contact-heading">Get In Touch</h3>
        
        <p className="contact-text">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Say Hello
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
