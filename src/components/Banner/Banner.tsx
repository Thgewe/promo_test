import React, {useContext} from 'react';
import cl from './banner.module.css';
import CustomButton from "../CustomButton/CustomButton";
import {PromoContext} from "../../context/PromoContext";

const Banner = () => {

    const {promoStatus, setPromoStatus} = useContext(PromoContext);

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