import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faInstagram, faWhatsappSquare, faVk, faGithubSquare, faCodepen, faSlack, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


import InputForm from './inputForm/inputForm';
import ButtonForm from './inputForm/button';
import { data }from './inputForm/dataForm';
import { media } from './inputForm/inputIcon';
// import { media } from './inputForm/inputIcon';

 class Contact extends Component {
  render() {

    return (
      <div className="container">
        <h3 className="text-black text-center">Contact Me</h3>
        <div className="row">
           <div className="col-sm-4 mt-5">
             <p><FontAwesomeIcon icon={faUser} />  Name: Ahmad Khan Saadat</p>
             <p><FontAwesomeIcon icon={faPhone} /> Phone: 0176 2076 14 39</p>
             <p><FontAwesomeIcon icon={faAddressBook} /> Address: jühnsdorfe Weg 71-75</p>
             <p><FontAwesomeIcon icon={faEnvelope} /> Email: ahmadkhan.saadat@gmail.com</p>
             <ul className="socialM">

               {media.map((items) => (<li key={items.id} {...items} />))}
               <FontAwesomeIcon />
               {/* <li className="mediaS"><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
               <li className="mediaS"><a href="https://www.instagram.com/ahmad.khaan/?hl=en"> <FontAwesomeIcon icon={faInstagram} /></a></li>
               <li className="mediaS"><a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsappSquare} /></a></li>
               <li className="mediaS"><a href="https://m.vk.com/feed"><FontAwesomeIcon icon={faVk} /></a></li>
               <li className="mediaS"><a href="https://github.com/Saadat1234"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
               <li className="mediaS"><a href="https://codepen.io/Saadat1234"><FontAwesomeIcon icon={faCodepen} /></a></li>
               <li className="mediaS"><a href="https://webupdci.slack.com/messages/C8PBYC08G/team/U8Q3M2RU4/"><FontAwesomeIcon icon={faSlack} /></a></li>
               <li className="mediaS"><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
               <li className="mediaS"><a href="https://secure.skype.com/portal/profile"><FontAwesomeIcon icon={faSkype} /></a></li> */}
             </ul>
           </div>
             <div className="col-sm-8">
               <Form className="form">
                 {data.map((item) => ( <InputForm key={item.id} {...item} />))}
                <ButtonForm />
               </Form>
             </div>
        </div>
    </div>



    );
  }
}


export default Contact
