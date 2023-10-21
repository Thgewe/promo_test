import {createContext, useState, Dispatch, SetStateAction, PropsWithChildren} from "react";

export interface IPromoContext {
    promoStatus: boolean;
    setPromoStatus: Dispatch<SetStateAction<boolean>>
}

const defaultContext = {
    promoStatus: true,
    setPromoStatus: (status: boolean) => {}
} as IPromoContext

export const PromoContext = createContext<IPromoContext>(defaultContext)

export default function PromoProvider ({children}: PropsWithChildren) {

    const [promoStatus, setPromoStatus] = useState<boolean>(defaultContext.promoStatus);

    return(
        <PromoContext.Provider value={{
            promoStatus,
            setPromoStatus,
        }}>
            {children}
        </PromoContext.Provider>
    );
}