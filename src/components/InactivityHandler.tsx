import React, {useContext, useEffect} from 'react';
import {PromoContext} from "../context/PromoContext";
import debounce from "./utils/debounce";

const InactivityHandler = () => {

    const {setPromoStatus} = useContext(PromoContext);
    const inactivityTimeMax = 10000;

    let timer: ReturnType<typeof setTimeout>;

    const timerReset = debounce(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            abort();
        }, inactivityTimeMax)
    }, 200)

    const abort = () => {
        setPromoStatus(true);
    }

    useEffect(() => {
        window.addEventListener('mousemove', timerReset);
        window.addEventListener('mousedown', timerReset);
        window.addEventListener('keydown', timerReset);
        timer = setTimeout(() => {
            abort();
        }, inactivityTimeMax)

        return () => {
            window.removeEventListener('mousemove', timerReset);
            window.removeEventListener('mousedown', timerReset);
            window.removeEventListener('keydown', timerReset);
            clearTimeout(timer);
        }
    }, [])

    return (
        <></>
    );
};

export default InactivityHandler;