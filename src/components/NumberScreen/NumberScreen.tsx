import React from 'react';
import cl from './numberScreen.module.css';
import CustomButton from "../CustomButton/CustomButton";

interface INumberScreenProps extends React.PropsWithChildren {
    promoStatus: boolean;
    setPromoStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO - context
//      - close cross

const NumberScreen: React.FC<INumberScreenProps> = ({
    promoStatus,
    setPromoStatus,
    children,
}) => {
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