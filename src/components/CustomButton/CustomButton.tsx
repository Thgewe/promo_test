import React from 'react';
import cl from './customButton.module.css';

interface ICustomButtonProps {
    tabIndex?: number,
    className?: string;
    content: string;
    callback: (params: any) => any;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
    tabIndex = 0,
    content,
    className = '',
    callback,
}) => {
    return (
        <button
            tabIndex={tabIndex}
            className={cl.button + ' ' + className}
            onClick={(e) => callback(e)}
        >
            {content}
        </button>
    );
};

export default CustomButton;