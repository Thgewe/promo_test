import React, {useContext, useState} from 'react';
import cl from './numberScreen.module.css';
import CustomButton from "../CustomButton/CustomButton";
import {PromoContext} from "../../context/PromoContext";
import MobileForm from "../MobileForm/MobileForm";
import {ReactComponent as Cross} from "../../media/cross.svg";
import {ControlsContext} from "../../context/ControlsContext";

const NumberScreen = () => {
    const {promoStatus, setPromoStatus} = useContext(PromoContext);
    const {close} = useContext(ControlsContext);
    const [submitted, setSubmitted] = useState<boolean>(false);

    return (
        <>
            <div className={cl.left + ' ' + (promoStatus ? cl.hidden : '')}>
                {submitted
                    ? <div className={cl.success}>
                        <h2>Заявка<br/>принята</h2>
                        <p>Держите телефон под рукой.<br/>Скоро с Вами свяжется наш менеджер. </p>
                    </div>
                    : <MobileForm setSubmitted={setSubmitted}/>
                }
            </div>
            <CustomButton
                ref={close}
                tabIndex={promoStatus ? -1 : 0}
                className={
                    cl.close +
                        ' ' + (promoStatus ? cl.hidden : '') +
                        ' ' + (submitted ? cl.submitted : '')
                }
                content={<Cross />}
                callback={() => setPromoStatus(true)}
            />
            <div className={cl.qrcode + ' ' + (promoStatus ? cl.hidden : '')}>=</div>
        </>
    );
};

export default NumberScreen;