import React, {useState} from 'react';
import cl from './mobileForm.module.css';
import MobileFormTop from "../MobileFormTop/MobileFormTop";
import MobileFormInputPanel from "../MobileFormInputPanel/MobileFormInputPanel";
import MobileFormBottom from "../MobileFormBottom/MobileFormBottom";

const MobileForm = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [agreement, setAgreement] = useState<boolean>(false);

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
        console.log('submit')
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
            <MobileFormBottom
                error={error}
                ready={!error && agreement && phoneNumber.length === digitsAmount}
                agreement={agreement}
                setAgreement={setAgreement}
            />
        </form>
    );
};

export default MobileForm;