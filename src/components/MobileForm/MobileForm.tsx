import React, {useState} from 'react';
import cl from './mobileForm.module.css';
import MobileFormTop from "../MobileFormTop/MobileFormTop";
import MobileFormInputPanel from "../MobileFormInputPanel/MobileFormInputPanel";

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

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form className={cl.form} onSubmit={submitHandler}>
            <MobileFormTop
                phoneNumber={phoneNumber}
                setPhoneNumber={phoneChangeHandler}
            />
            <MobileFormInputPanel
                phoneNumber={phoneNumber}
                setPhoneNumber={phoneChangeHandler}
            />
        </form>
    );
};

export default MobileForm;