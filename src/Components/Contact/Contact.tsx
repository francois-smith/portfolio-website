import React from 'react';
import { ContactSection, ContactHeader, ContactForm } from './contactStyles';
import { Button, TextField } from '@mui/material';

const Contact: React.FC = () => {
    function select(e: any){
        let tag = e.target.parentElement.querySelector("span");
        tag.style = "transform: translateY(-28px)"
    }

    function onChange(e: React.FormEvent<HTMLInputElement>): void {
        let element = e.currentTarget;
        if(element.value == ""){
            return;
        }

        let tag: string = "";
        switch(tag){
            case "Name":
                validateName(element.value);
                break;

            case "Email":
                validateEmail(element.value);
                break;

            case "Number":
                validateNumber(element.value);
                break;

            case "Message":
                validateMessage(element.value);
                break;
        }
    }

    function validateName(name: string): boolean{
        let namePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        if(!namePattern.test(name)){
            return false;
        }
        else{
            return true;
        }
    }

    function validateEmail(email: string): boolean{
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailPattern.test(email)){
            return false;
        }
        else{
            return true;
        }
    }

    function validateNumber(number: string): boolean{
        let numberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!numberPattern.test(number)){
            return false;
        }
        else{
            return true;
        }
    }

    function validateMessage(message: string): boolean{
        if(message.length < 20){
            return false;
        }
        else{
            return true;
        }
    }

    function submit(event: React.SyntheticEvent){
        event.preventDefault();
        let name: string =  (document.getElementById("name") as HTMLInputElement).value;
        let email: string = (document.getElementById("email") as HTMLInputElement).value;
        let number: string = (document.getElementById("phone") as HTMLInputElement).value;
        let message: string = (document.getElementById("message") as HTMLInputElement).value;

        if(validateName(name) && validateEmail(email) && validateNumber(number) && validateMessage(message)){
            const request = new XMLHttpRequest();
            request.open("POST", "https://francois-smith.com/form-validate.php");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send("name="+name+"&email="+email+"&phone="+number+"&message="+message+"");
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <ContactSection id='ContactSection'> 
            <h2 className='Section_Heading'>CONTACT</h2>
            <ContactHeader>
                <p id="GetInTouch"><span className='Text-Gradient'>GET IN TOUCH</span></p>
                <p>Interested in working with me? Feel free to contact me.</p>
                <div className="contact-divider">
                    <img src="/Media/SVG/divider.svg" alt=""/>
                </div>
            </ContactHeader>
            <ContactForm>
                <form onSubmit={submit}>
                    <input type="text" id="name"/>
                    <input type="text" id="email"/>
                    <input type="text" id="phone"/>
                    <textarea id="message" cols={30} rows={10}/>
                    <input type="submit"/>
                </form>
            </ContactForm>
        </ContactSection>
    );
};

export default Contact;