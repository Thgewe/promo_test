import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import cl from './mobileFormBottom.module.css';
import {ReactComponent as Check} from '../../media/check.svg';

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
                        onChange={() => setAgreement(!agreement)}
                    />
                    <label htmlFor="check">
                        <Check />
                    </label>
                    <p>Согласие на обработку персональных данных</p>
                </div>
            }
            <CustomButton
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