import React from 'react';
import cl from './mobileFormTop.module.css';
import phoneFormat from "../utils/phoneFormat";

interface IMobileFormTopProps {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const MobileFormTop: React.FC<IMobileFormTopProps> = ({
    phoneNumber,
    setPhoneNumber,
}) => {

    const digitsAmount = 10;

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            e.target.value.match(/\D/)
            || e.target.value.length > digitsAmount
        ) { return }

        setPhoneNumber(e.target.value);
    }

    return (
        <div className={cl.top}>
            <h1 className={cl.headline}>Введите ваш номер мобильного телефона</h1>
            <input
                id={"phone"}
                type="tel"
                className={cl.input}
                value={phoneNumber}
                onChange={changeHandler}
            />
            <label
                className={cl.label}
                htmlFor={"phone"}
            >
                {phoneFormat(phoneNumber)}
            </label>
            <p className={cl.clarification}>
                и с Вами свяжется наш менеждер для дальнейшей консультации
            </p>
        </div>
    );
};

export default MobileFormTop;