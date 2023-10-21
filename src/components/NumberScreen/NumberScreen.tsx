import React, {useContext} from 'react';
import cl from './numberScreen.module.css';
import CustomButton from "../CustomButton/CustomButton";
import {PromoContext} from "../../context/PromoContext";

// TODO - close cross

const NumberScreen: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const {promoStatus, setPromoStatus} = useContext(PromoContext);

    return (
        <>
            <div className={cl.left + ' ' + (promoStatus ? cl.hidden : '')}>
                {children}
            </div>
            <CustomButton
                tabIndex={promoStatus ? -1 : 0}
                className={cl.close + ' ' + (promoStatus ? cl.hidden : '')}
                content={'X'}
                callback={() => setPromoStatus(true)}
            />
            <div className={cl.qrcode + ' ' + (promoStatus ? cl.hidden : '')}>=</div>
        </>
    );
};

export default NumberScreen;