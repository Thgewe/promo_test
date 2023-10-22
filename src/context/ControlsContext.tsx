import {createContext, MutableRefObject, PropsWithChildren, useRef} from "react";

export interface IControlsContext {
    submit: MutableRefObject<null>;
    panel: MutableRefObject<null>;
    close: MutableRefObject<null>;
}

const defaultContext = {
    submit: {},
    panel: {},
    close: {},
} as IControlsContext;

export const ControlsContext = createContext<IControlsContext>(defaultContext);

export default function ControlsProvider({children}: PropsWithChildren) {
    const submit = useRef(null);
    const panel = useRef(null);
    const close = useRef(null);

    return (
        <ControlsContext.Provider value={{
            submit,
            panel,
            close,
        }}>
            {children}
        </ControlsContext.Provider>
    )
}