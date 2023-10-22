import React, {useContext, useEffect, useState} from 'react';
import cl from './banner.module.css';
import CustomButton from "../CustomButton/CustomButton";
import {PromoContext} from "../../context/PromoContext";

const Banner = () => {

    const {promoStatus, setPromoStatus} = useContext(PromoContext);
    const [delayOver, setDelayOver] = useState<boolean>(false);
    const appearanceDelay = 5000;

    useEffect(() => {
        const bannerDelay = setTimeout(() => {
            setDelayOver(true);
        }, appearanceDelay)

        return () => {
            clearTimeout(bannerDelay);
        }
    }, [])

    return (
        <div className={promoStatus
            ? cl.banner + ' ' + (delayOver ? '' : cl.hidden)
            : cl.banner + ' ' + cl.hidden
        }>
            <CustomButton
                tabIndex={promoStatus && delayOver ? 0 : -1}
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