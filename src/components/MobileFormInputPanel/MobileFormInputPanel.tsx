import React, {useContext} from 'react';
import cl from './mobileFormInputPanel.module.css';
import {IFormChildrenProps} from "../../models/form";
import {ControlsContext} from "../../context/ControlsContext";

const MobileFormInputPanel: React.FC<IFormChildrenProps> = ({
    phoneNumber,
    setPhoneNumber,
}) => {

    const {panel} = useContext(ControlsContext);

    const buttons = []
    for (let i = 0; i < 10; i++) {
        buttons.push(<button
            key={i}
            type={"button"}
            value={i}
            className={cl.btn}
        >
            {i}
        </button>)
    }

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLButtonElement;
        if (target.classList.contains(cl.btn)) {
            if (parseInt(target.value) < 0) {
                setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1));
            } else {
                setPhoneNumber(phoneNumber + target.value);
            }
        }
    }

    return (
        <div
            ref={panel}
            className={cl.panel}
            onClick={clickHandler}
        >
            {buttons}
            <button
                type={"button"}
                value={'-1'}
                className={cl.btn}
            >
                СТЕРЕТЬ
            </button>
        </div>
    );
};

export default MobileFormInputPanel;