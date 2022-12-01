import React, { useState } from "react"
import Nav from "../components/Nav"
import emailjs from 'emailjs-com'

export default function Contact() {

    const [from_name, setFromName] = useState("");
    const [reply_to, setReplyTo] = useState("");
    const [message, setMessage] = useState("");

    const responseModalOff = () => {
        const popup = document.querySelector('.c-contactForm__error');
        popup.style.display = 'none';
    }
    const responseModalOn = (msg) => {
        const modal = document.querySelector('.c-contactForm__error');
        const modalMsg = document.querySelector('.c-contactForm__errorMsg');
        modalMsg.innerText = msg;
        modal.style.display = 'block';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let params = document.querySelector('form');
        emailjs.sendForm('service_s6hwfgp', 'template_3n3hcp5', params, 'user_Ta2VjHABZrUQcDwq29BKM')
            .then((result) => {
                setFromName('');
                setReplyTo('');
                setMessage('');
                responseModalOn('Message sent! I will be in touch!');
            }, (error) => {
                responseModalOn('Sorry! Looks like something broke. We will fix this as soon as we can. If you want to get in touch ASAP, just reach out over my LinkedIn. Check the nav for links!');
            });
        ;
    }
    return(
        <div
            className="l-container"
        >
            <Nav
            />
            
            <div
                className="c-contactForm__error"
            >
                <div
                    className="c-contactForm__errorMsg"
                >
                    Error!
                </div>
                <div
                    className="c-contactForm__errorOk"
                    aria-hidden="true"
                    onClick={responseModalOff}
                >
                    OK
                </div>
            </div>
            <div
                className="c-contactForm__outer"
            >
                <div
                    className="c-contactForm"
                >
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div
                            className="c-contactForm__field"
                        >
                            <label 
                                htmlFor="l-contactForm__fullname" 
                                className="c-contactForm__label"
                            >
                                Name:
                            </label>
                            <input 
                                type="text" 
                                name="from_name"
                                id="l-contactForm__fullname"
                                className="c-contactForm__inputText c-contactForm__input"
                                onChange={(e) => setFromName(e.target.value)}
                                value={from_name}
                            />
                        </div>
                        <div
                            className="c-contactForm__field"
                        >
                            <label 
                                htmlFor="l-contactForm__email" 
                                className="c-contactForm__label"
                            >
                                Email:
                            </label>
                            <input 
                                type="text" 
                                name="reply_to"
                                id="l-contactForm__email"
                                className="c-contactForm__inputText c-contactForm__input"
                                onChange={(e) => setReplyTo(e.target.value)}
                                value={reply_to}
                            />
                        </div>
                        <div
                            className="c-contactForm__field"
                        >
                            <label 
                                htmlFor="l-contactForm__message"
                                className="c-contactForm__label"
                            >
                                Message:
                            </label>
                            <textarea
                                id="l-contactForm__message"
                                name="message"
                                className="c-contactForm__inputTextarea c-contactForm__input"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            >
                            </textarea>
                        </div>
                        <input 
                            className="c-contactForm__submitBtn"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}