import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';



const Contact = () => {
    const Submited = () => window.onload = setTimeout(function(){
        alert('Your Message has been Delivered to our team. Thank you');
        
    }, 4000); 
    
     const scriptURL = 'https://script.google.com/macros/s/AKfycbww-71R02GDiIvCrU0Ljn_46UVGDC3Q-3G5Z6VBzujHcKllazte8XunH-IVsP984ET6Zw/exec'
     const form = document.forms['contactus']
   
     form.addEventListener('submit', e => {
        e.preventDefault()
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
             form.reset()
          
         
           console.log('Success!', response)} )
          .catch(error => console.error('Error!', error.message))
      })
    

    return (
        <>

        <div className='demo' id='demo'>
            <div className='container'>
            <header className="ccheader">
    <h1>Contact Our Team</h1>	
</header>

            <div className="wrapper">
        <form method='post' action="" name="contactus" className="ccform">
        <div className="ccfield-prepend">
            <span className="ccform-addon"><i className="fa fa-user fa-2x"></i></span>
            <input className="ccformfield" type="text"  name="name" for="name" placeholder="Full Name" required/>
        </div>
        <div className="ccfield-prepend">
            <span className="ccform-addon"><i className="fa fa-envelope fa-2x"></i></span>
            <input className="ccformfield" type="email" name="email" for="email" placeholder="Email" required/>
        </div>
        <div className="ccfield-prepend">
            <span className="ccform-addon"><i className="fa fa-mobile-phone fa-2x"></i></span>
            <input className="ccformfield" for="number" name="number" type="text" placeholder="Phone"/>
        </div>
        
        <div className="ccfield-prepend">
            <span className="ccform-addon"><i className="fa fa-comment fa-2x"></i></span>
            <textarea className="ccformfield" for="message"  name="message" rows="8" placeholder="Message" required></textarea>
        </div>
        <div className="ccfield-prepend">
         
            <button type="submit" className="ccbtn" onClick={Submited}>
                Submit
            </button>
        </div>

        
        </form>
        <header className="ccheader">
    <h1>Address</h1>	
</header>

<div className="mapouter"><div className="gmap_canvas"><iframe title='location'  className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=675&amp;height=464&amp;hl=en&amp;q=Q3X4+VRX, D.H.A Phase 6 Nishat Commercial Area Phase 6 Defence Housing Authority, Karachi, Karachi City, Sindh 75500&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><Link href="https://embed-googlemap.com">
Click Here to view in Google maps </Link></div></div>
 <div className="ccheader" >
<h4>
Display Centre

</h4>
<h4>
DHA Branch

</h4>

 </div>
 <div className="mapouter"><div className="gmap_canvas"><iframe title='location'  className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=675&amp;height=464&amp;hl=en&amp;q=AREA ANGARA GOTH LIAQUATABAD&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">google maps code generator</a></div></div>
    </div>

    <div className="ccheader" >
<h4>
Manufacture & Assemble

</h4>
<h4>
LIAQUATABAD

</h4>

 </div>
            </div>
        </div>

        </>
    )
}

export default Contact;
