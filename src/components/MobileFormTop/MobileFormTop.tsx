import React from 'react';
import cl from './mobileFormTop.module.css';
import phoneFormat from "../utils/phoneFormat";
import {IFormChildrenProps} from "../../models/form";

const MobileFormTop: React.FC<IFormChildrenProps> = ({
    phoneNumber,
    setPhoneNumber,
}) => {
    const preventArrowNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowDown' ||
            e.key === 'ArrowLeft'
        ) {
            e.preventDefault();
            return false;
        }
    }

    return (
        <div className={cl.top}>
            <h1 className={cl.headline}>Введите ваш номер мобильного телефона</h1>
            <input
                id={"phone"}
                type="tel"
                className={cl.input}
                value={phoneNumber}
                onKeyDown={preventArrowNavigation}
                onChange={(e) => setPhoneNumber(e.target.value)}
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