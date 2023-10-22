import React, {useContext, useEffect, useRef, useState} from 'react';
import {ControlsContext} from "../context/ControlsContext";
import {IFormChildrenProps} from "../models/form";

interface IKeyboardInputControllerProps extends IFormChildrenProps {
    ready: boolean,
}

const KeyboardInputController = ({
    phoneNumber,
    setPhoneNumber,
    ready,
}: IKeyboardInputControllerProps) => {

    const {submit, panel, close} = useContext(ControlsContext);
    const [buttonMatrix, setButtonMatrix] = useState<HTMLButtonElement[][]>([]);
    const maxM = 4; // Максимальный индекс строки матрицы
    const maxN = 3; // Максимальный индекс столбца матрицы

    const focusIndex = useRef({m: 1, n: 1});

    const keyArrows = (key: string) => {
        let {current} = focusIndex;
        const rowOfDelBtn = 3;

        switch (key) {
            case 'ArrowUp':
                if (current.m - 1 >= 0)
                    current.m--;
                break;
            case 'ArrowRight':
                // перепрыгивает дублирующийся элемент кнопки "стереть"
                if (current.m === rowOfDelBtn && current.n === 0) {
                    current.n += 2;
                // перепрыгивает дублирующийся элемент кнопки "submit"
                } else if (current.m === maxM) {
                    current.n = 3;
                } else if (current.n + 1 <= maxN)
                    current.n++;
                break;
            case 'ArrowDown':
                // Ничего не делает, следующая кнопка "submit" и она неактивна
                if (current.m === (maxM - 1) && !ready)
                    break;
                if (current.m + 1 <= maxM)
                    current.m++;
                break;
            case 'ArrowLeft':
                if (current.n - 1 >= 0)
                    current.n--;
                break;
        }
        buttonMatrix[current.m][current.n].focus();
    }

    const keyHandler = (e: KeyboardEvent) => {
        keyArrows(e.key);
        if (e.key === 'Escape') {
            close.current
                && (close.current as HTMLButtonElement).click();
        }
        if (parseInt(e.key) >= 0 && parseInt(e.key) < 10) {
            setPhoneNumber(phoneNumber + e.key);
        }
        if (e.key === 'Backspace') {
            setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1));
        }
    }


    /** Вернет матрицу кнопок размерности 5x4, по которой будет осуществляться навигация
     * - d - deleteBtn
     * - c - closeBtn
     * - s - submitBtn
     *
     * - [1, 2, 3, c],
     * - [4, 5, 6, c],
     * - [7, 8, 9, c],
     * - [d, d, 0, c],
     * - [s, s, s, c],
     * @param nodes: HTMLButtonElement[]
     * @return HTMLButtonElement[][]
     */
    const fillMatrix = (nodes: HTMLButtonElement[]) => {
        const newButtons: HTMLButtonElement[][] = [];
        const numberOfDigitsInOneLine = 3;

        for (let m = 0; m < maxM + 1; m++) {
            newButtons.push([]);

            for (let n = 0; n < maxN + 1; n++) {
                if (n === maxN) {
                    newButtons[m][n] = (close.current! as HTMLButtonElement)
                } else if (m === maxM) {
                    newButtons[m][n] = (submit.current! as HTMLButtonElement)
                } else {
                    newButtons[m][n] = nodes[numberOfDigitsInOneLine * m + n]
                }
            }
        }
        return newButtons;
    }

    // Так как кнопки стоят в неправильном порядке,
    // то надо их правильно разложить,
    // а также дублировать кнопку "стереть",
    // т.к. в матрице она занимает 2 места
    const formatNodes = () => {
        const panelNodes: HTMLButtonElement[] = [];

        if (panel.current) {
            const {childNodes} = (panel.current as HTMLDivElement);

            for (let i = 1; i < childNodes.length + 1; i++) {
                // условие дублирования кнопки
                if (i === childNodes.length) {
                    panelNodes.push(childNodes[i - 1] as HTMLButtonElement);
                    break;
                }
                panelNodes.push(childNodes[i] as HTMLButtonElement);
            }
            panelNodes.push(childNodes[0] as HTMLButtonElement);
        }
        return panelNodes;
    }

    useEffect(() => {
        window.addEventListener('keydown', keyHandler)

        return () => {
            window.removeEventListener('keydown', keyHandler)
        }
    }, [phoneNumber, buttonMatrix, ready])

    useEffect(() => {
        // Установка дефолтного фокуса
        if (buttonMatrix.length)
            buttonMatrix[focusIndex.current.m][focusIndex.current.n].focus();
    }, [buttonMatrix])

    useEffect(() => {
        setButtonMatrix(fillMatrix(formatNodes()));
    }, [])


    return (
        <></>
    );
};

export default KeyboardInputController;