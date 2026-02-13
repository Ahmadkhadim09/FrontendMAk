const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button>Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
