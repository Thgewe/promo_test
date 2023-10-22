import React, {useContext, useEffect, useState} from 'react';
import cl from './mobileForm.module.css';
import MobileFormTop from "../MobileFormTop/MobileFormTop";
import MobileFormInputPanel from "../MobileFormInputPanel/MobileFormInputPanel";
import MobileFormBottom from "../MobileFormBottom/MobileFormBottom";
import ValidationService from "../../API/validationService";
import KeyboardInputController from "../KeyboardInputController";
import {PromoContext} from "../../context/PromoContext";
import InactivityHandler from "../InactivityHandler";

interface IMobileFormProps {
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileForm = ({setSubmitted}: IMobileFormProps) => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [agreement, setAgreement] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const {promoStatus} = useContext(PromoContext);

    const digitsAmount = 10;
    const ready = !error &&
        agreement &&
        phoneNumber.length === digitsAmount &&
        !loading;

    const validate = ValidationService;


    const validateNumber = async () => {
        // Проверка количества введенных чисел
        if (phoneNumber.length === digitsAmount) {
            setLoading(true);
            try {
                const res = await validate.validatePhoneNumber(phoneNumber)
                setError(!res.valid);
                setLoading(false);
            } catch(e: any) {
                alert(e.message + ' Придется пропустить номер без проверки');
                setError(false);
                setLoading(false);
            }
        // Проверка есть ли ошибка, при недостающей длине номера
        } else if (phoneNumber.length < digitsAmount && error) {
            setError(false);
        }
    }

    const phoneChangeHandler = (newPhone: string) => {
        // Проверка, чтобы в номере были только числа
        if (newPhone.match(/\D/)
            || newPhone.length > digitsAmount
        ) { return }
        setPhoneNumber(newPhone);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        // Проверка, что номер валидный, введен полностью,
        // и согласны с обработкой ПД
        if (!error &&
            agreement &&
            phoneNumber.length === digitsAmount &&
            !loading) {
            setSubmitted(true);
        }
    }

    useEffect(() => {
        validateNumber();
    }, [phoneNumber])

    return (
        <form className={cl.form} onSubmit={submitHandler}>
            <MobileFormTop
                error={error}
                phoneNumber={phoneNumber}
                setPhoneNumber={phoneChangeHandler}
            />
            <MobileFormInputPanel
                phoneNumber={phoneNumber}
                setPhoneNumber={phoneChangeHandler}
            />
            <MobileFormBottom
                error={error}
                ready={ready}
                agreement={agreement}
                setAgreement={setAgreement}
            />
            {promoStatus
                ? null
                : <>
                    <KeyboardInputController
                        ready={ready}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={phoneChangeHandler}
                    />
                    <InactivityHandler />
                </>
            }
        </form>
    );
};

export default MobileForm;