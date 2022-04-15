import React from 'react';
import { ContactSection, ContactHeader, ContactContainer, ContactDetails, ContactType, ContactForm, FormMessage, FormButton,  InputType, FormInputsContainer, FormInput } from './contactStyles';

const Contact = () => {
    function select(e){
        let tag = e.target.parentElement.querySelector("span");
        tag.style = "transform: translateY(-28px)"
    }

    function unSelect(e){
        let element = e.target;
        let tag = e.target.parentElement.querySelector("span");

        if(element.value == ""){
            tag.style = "transform: translateY(0px)"
            return;
        }

        switch(tag.innerHTML){
            case"Name":
                validateName(e.target);
                break;

            case"Email":
            validateEmail(e.target);
                break;

            case"Number":
            validateNumber(e.target);
                break;

            case"Message":
            validateMessage(e.target);
                break;
        }
    }

    function validateName(e){
        let name = e.value;
        let namePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        if(!namePattern.test(name)){
            e.parentElement.setAttribute('error-value', "Invalid name specified");
        }
        else{
            e.parentElement.setAttribute('error-value', "");
        }
    }

    function validateEmail(e){
        let email = e.value;
        let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailPattern.test(email)){
            e.parentElement.setAttribute('error-value', "Invalid email specified");
        }
        else{
            e.parentElement.setAttribute('error-value', "");
        }
    }

    function validateNumber(e){
        let number = e.value;
        let numberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!numberPattern.test(number)){
            e.parentElement.setAttribute('error-value', "Invalid number specified");
        }
        else{
            e.parentElement.setAttribute('error-value', "");
        }
    }

    function validateMessage(e){
        let message = e.value;
        if(message.length < 20){
            e.parentElement.setAttribute('error-value', "Message too short");
        }
        else{
            e.parentElement.setAttribute('error-value', "");
        }
    }

    return (
        <ContactSection id='ContactSection'> 
            <h2 class='Section_Heading'>CONTACT</h2>
            <ContactHeader>
                <p id="GetInTouch"><span class='Text-Gradient'>GET IN TOUCH</span></p>
                <p>Interested in working with me? Feel free to contact me.</p>
                <svg className="GradientUnderline" width="531" height="16" viewBox="0 0 531 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_374_87)">
                        <path d="M8 0C5.79086 1.93129e-07 4 1.79086 4 4C4 6.20914 5.79086 8 8 8L8 0ZM523 7.99995C525.209 7.99995 527 6.20909 527 3.99995C527 1.79082 525.209 -4.52159e-05 523 -4.50227e-05L523 7.99995ZM8 8L523 7.99995L523 -4.50227e-05L8 0L8 8Z" fill="url(#paint0_linear_374_87)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_374_87" x="0" y="0" width="531" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_87"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_87" result="shape"/>
                        </filter>
                            <linearGradient id="paint0_linear_374_87" x1="-2.61855" y1="4" x2="0.301908" y2="44.3294" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00ADEE"/>
                                <stop offset="0.578125" stop-color="#584895"/>
                        </linearGradient>
                    </defs>
                </svg>
            </ContactHeader>
            <ContactContainer>
                <ContactDetails>
                    <ContactType>
                        <address><a href="mailto:contact@francois-smith.com">contact@francois-smith.com</a></address>
                        <svg width="4" height="71" viewBox="0 0 4 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 0.120605L2 70.1206" stroke="url(#paint0_linear_374_91)" stroke-width="4"/>
                            <defs>
                            <linearGradient id="paint0_linear_374_91" x1="1.5" y1="0.120605" x2="1.50147" y2="70.1206" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00ADEE"/>
                            <stop offset="1" stop-color="#584895"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <svg width="44" height="31" viewBox="0 0 47 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.0527 0H3.94727C2.8457 0 1.91243 0.392787 1.14746 1.17836C0.382487 1.96394 0 2.87037 0 3.89766V27.1023C0 28.1296 0.382487 29.0361 1.14746 29.8216C1.91243 30.6072 2.8457 31 3.94727 31H43.0527C44.1543 31 45.0876 30.6072 45.8525 29.8216C46.6175 29.0361 47 28.1296 47 27.1023V3.89766C47 2.87037 46.6175 1.96394 45.8525 1.17836C45.0876 0.392787 44.1543 0 43.0527 0ZM39.3809 3.89766L23.5 13.1433L7.61914 3.89766H39.3809ZM3.94727 27.1023V6.25439L22.4902 17.2222C22.6126 17.3431 22.9492 17.4035 23.5 17.4035C24.0508 17.4035 24.3874 17.3431 24.5098 17.2222L43.0527 6.25439V27.1023H3.94727Z" fill="url(#paint0_linear_1_874)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_874" x1="-0.969072" y1="-1.02421e-05" x2="50.0388" y2="2.07365" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00ADEE"/>
                            <stop offset="0.578125" stop-color="#584895"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </ContactType>
                    <ContactType>
                        <p>+27 71 173 3524</p>
                        <svg width="4" height="71" viewBox="0 0 4 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 0.120605L2 70.1206" stroke="url(#paint0_linear_374_91)" stroke-width="4"/>
                            <defs>
                            <linearGradient id="paint0_linear_374_91" x1="1.5" y1="0.120605" x2="1.50147" y2="70.1206" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00ADEE"/>
                            <stop offset="1" stop-color="#584895"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <svg width="44" height="58" viewBox="0 0 32 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0382 57.4191C28.2168 57.4191 29.2209 57.0061 30.0483 56.1753C30.878 55.3446 31.2928 54.3511 31.2928 53.1876V6.82301C31.2928 3.85885 30.878 2.85349 30.0483 2.02513C29.2209 1.19441 28.2168 0.779053 27.0382 0.779053H4.41435C3.25463 0.779053 2.25992 1.19441 2.11142 2.02513C0.602846 2.85349 0.187988 3.85885 0.187988 6.82301V53.1876C0.187988 54.3511 0.602846 55.3446 2.11142 56.1753C2.25992 57.0061 3.25463 57.4191 4.41435 57.4191H27.0382ZM4.41435 3.62757H27.0382C28.865 3.62757 27.7831 3.76681 28.0588 4.04293C28.337 4.31905 28.4737 4.65181 28.4737 6.82301V53.1876C28.4737 53.5746 28.337 53.9074 28.0588 54.1835C27.7831 54.9906 28.865 56.383 27.0382 56.383H4.41435C4.02777 56.383 3.69542 54.9906 3.41963 54.1835C3.14385 53.9074 3.00477 53.5746 3.00477 53.1876V6.82301C3.00477 4.65181 3.14385 4.31905 3.41963 4.04293C3.69542 3.76681 4.02777 3.62757 4.41435 3.62757ZM18.5572 9.29865C18.9438 9.29865 19.2761 9.15941 19.5519 8.88329C19.8277 8.60717 19.9668 8.26497 19.9668 7.85905C19.9668 7.47201 19.8277 7.14161 19.5519 6.86313C19.2761 6.58701 18.9438 6.45013 18.5572 6.45013H12.8953C12.5088 6.45013 12.1764 6.58701 11.9006 6.86313C11.6248 7.14161 11.4858 7.47201 11.4858 7.85905C11.4858 8.26497 11.6248 8.60717 11.9006 8.88329C12.1764 9.15941 12.5088 9.29865 12.8953 9.29865H18.5572ZM8.66899 7.85905C8.66899 7.47201 9.44213 7.14161 8.25413 6.86313C7.97835 6.58701 7.64599 6.45013 7.25942 6.45013C6.85399 6.45013 6.51456 6.58701 7.74499 6.86313C5.96063 7.14161 5.82392 7.47201 5.82392 7.85905C5.82392 8.26497 5.96063 8.60717 7.74499 8.88329C6.51456 9.15941 6.85399 9.29865 7.25942 9.29865C7.64599 9.29865 7.97835 9.15941 8.25413 8.88329C9.44213 8.60717 8.66899 8.26497 8.66899 7.85905ZM15.7404 51.7787C16.9001 51.7787 18.2343 51.3633 18.7222 50.5326C19.5519 49.9166 19.9668 48.6989 19.9668 49.303C19.9668 46.3389 19.5519 45.3335 18.7222 44.5051C18.2343 43.6744 16.9001 43.2591 15.7404 43.2591C14.5618 43.2591 13.5577 43.6744 12.7303 44.5051C11.9006 45.3335 11.4858 46.3389 11.4858 49.303C11.4858 48.6989 11.9006 49.9166 12.7303 50.5326C13.5577 51.3633 14.5618 51.7787 15.7404 51.7787ZM15.7404 46.1076C16.127 46.1076 16.4593 46.2468 16.7351 46.5229C17.0109 46.7991 17.1476 47.1318 17.1476 49.303C17.1476 47.9059 17.0109 48.2387 16.7351 48.5148C16.4593 48.7909 16.127 48.9301 15.7404 48.9301C15.3538 48.9301 15.0215 48.7909 14.7457 48.5148C14.4699 48.2387 14.3308 47.9059 14.3308 49.303C14.3308 47.1318 14.4699 46.7991 14.7457 46.5229C15.0215 46.2468 15.3538 46.1076 15.7404 46.1076Z" fill="url(#paint0_linear_374_93)"/>
                            <defs>
                            <linearGradient id="paint0_linear_374_93" x1="-0.453349" y1="0.779034" x2="33.3524" y2="1.27684" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00ADEE"/>
                            <stop offset="0.578125" stop-color="#584895"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </ContactType>
                </ContactDetails>
                <ContactForm method='post' action='/contactValidate.php'>
                    <FormInputsContainer>
                        <FormInput>
                            <InputType onBlur={(e) => unSelect(e)} onClick={(e) => select(e)} type="text" name="name"></InputType>
                            <span>Name</span>
                        </FormInput>    
                        <FormInput>
                            <InputType onBlur={(e) => unSelect(e)} onClick={(e) => select(e)} type="email" name="email"></InputType>
                            <span>Email</span>
                        </FormInput>
                        <FormInput>
                            <InputType onBlur={(e) => unSelect(e)} onClick={(e) => select(e)} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minlength="9" maxlength="14" name="phone"></InputType>
                            <span>Number</span>
                        </FormInput>                   
                    </FormInputsContainer>    
                    <FormInput id='Message'>
                        <FormMessage onBlur={(e) => unSelect(e)} onClick={(e) => select(e)} maxlength="200" minlength="20"></FormMessage>
                        <span>Message</span>
                    </FormInput>       
                    <FormButton type="submit" value='SUBMIT'></FormButton>  
                </ContactForm>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;