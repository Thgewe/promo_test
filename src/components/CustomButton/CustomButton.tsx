import React, {forwardRef} from 'react';
import cl from './customButton.module.css';

interface ICustomButtonProps {
    disabled?: boolean;
    tabIndex?: number;
    className?: string;
    content: string | React.ReactNode;
    callback: (params: any) => any;
    type?: "button" | "submit" | "reset";
}

const CustomButton = forwardRef<HTMLButtonElement, ICustomButtonProps>(({
    type,
    disabled = false,
    tabIndex = 0,
    content,
    className = '',
    callback,
}, ref) => {
    return (
        <button
            ref={ref}
            type={type}
            disabled={disabled}
            tabIndex={tabIndex}
            className={cl.button + ' ' + className}
            onClick={(e) => callback(e)}
        >
            {content}
        </button>
    );
});

export default CustomButton;