import React from 'react';
import cl from './customButton.module.css';

interface ICustomButtonProps {
    disabled?: boolean;
    tabIndex?: number;
    className?: string;
    content: string;
    callback: (params: any) => any;
    type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ICustomButtonProps> = ({
    type,
    disabled = false,
    tabIndex = 0,
    content,
    className = '',
    callback,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            tabIndex={tabIndex}
            className={cl.button + ' ' + className}
            onClick={(e) => callback(e)}
        >
            {content}
        </button>
    );
};

export default CustomButton;