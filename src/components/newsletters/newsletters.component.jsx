import React from 'react';

const Newsletters = () => (
<div className="newsLetters">
    <h2 className="newsLetters__heading-main">Be in the know</h2>
    <h4 className="newsLetters__heading-sub">Sign up to receive the latest from Us</h4>
    <div className="newsLetters__form">
        <form action="#" className="newsLetters__form-signUp">
            <input className="newsLetters__form-signUp-input" type="text" required placeholder="Enter your email address.." />
            <button className="newsLetters__form-signUp-btn">sign up</button>
        </form>
    </div>
</div>

)


export default Newsletters;