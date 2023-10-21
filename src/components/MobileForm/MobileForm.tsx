import React, {useState} from 'react';
import cl from './mobileForm.module.css';
import MobileFormTop from "../MobileFormTop/MobileFormTop";

const MobileForm = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const digitsAmount = 10;

    const phoneChangeHandler = (newPhone: string) => {
        if (
            newPhone.match(/\D/)
            || newPhone.length > digitsAmount
        ) { return }

        setPhoneNumber(newPhone);
    }

    return (
        <form className={cl.form}>
            <MobileFormTop
                phoneNumber={phoneNumber}
                setPhoneNumber={phoneChangeHandler}
            />
        </form>
    );
};

export default MobileForm;