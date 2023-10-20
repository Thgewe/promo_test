import React from 'react';
import cl from './banner.module.css';
import CustomButton from "../CustomButton/CustomButton";

interface IBannerProps {
    promoStatus: boolean;
    setPromoStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
const Banner = ({promoStatus, setPromoStatus}: IBannerProps) => {
    return (
        <div className={promoStatus
            ? cl.banner
            : cl.banner + ' ' + cl.hidden
        }>
            <CustomButton
                tabIndex={promoStatus ? 0 : -1}
                className={cl.btn}
                content={'ОК'}
                callback={() => {
                    setPromoStatus(!promoStatus);
                }}
            />
        </div>
    );
};

export default Banner;