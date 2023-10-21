import React, {useState} from 'react';
import cl from './mobileForm.module.css';
import MobileFormTop from "../MobileFormTop/MobileFormTop";

const MobileForm = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');

    return (
        <form className={cl.form}>
            <MobileFormTop
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
            />
        </form>
    );
};

export default MobileForm;