import React, {useContext} from 'react';
import CustomButton from "../CustomButton/CustomButton";
import cl from './mobileFormBottom.module.css';
import {ReactComponent as Check} from '../../media/check.svg';
import {ControlsContext} from "../../context/ControlsContext";

interface IMobileFormBottomProps {
    error: boolean;
    ready: boolean;
    agreement: boolean;
    setAgreement: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileFormBottom: React.FC<IMobileFormBottomProps> = ({
    error,
    ready,
    setAgreement,
    agreement,
}) => {

    const {submit} = useContext(ControlsContext);

    return (
        <div className={cl.bottom}>
            {error
                ? <p className={cl.error}>Неверно введён номер</p>
                : <div className={cl.agreement}>
                    <input
                        tabIndex={-1}
                        className={cl.check}
                        id={'check'}
                        type={'checkbox'}
                        checked={agreement}
                        onChange={() => setAgreement(!agreement)}
                    />
                    <label htmlFor="check">
                        <Check />
                    </label>
                    <p>Согласие на обработку персональных данных</p>
                </div>
            }
            <CustomButton
                ref={submit}
                className={cl.submit}
                type={"submit"}
                disabled={!ready}
                content={'ПОДТВЕРДИТЬ НОМЕР'}
                callback={() => {}}
            />
        </div>
    );
};

export default MobileFormBottom;