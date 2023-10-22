const format = '+7(___)___-__-__';

const phoneFormat = (newNumber: string): string => {
    const newFormatted = format.split('');
    let j = 0;
    for (let i = 3; i < format.length; i++) {
        if (j >= newNumber.length) {
            break;
        }
        if (format[i] === '_') {
            newFormatted[i] = newNumber[j];
            j++;
        }
    }
    return newFormatted.join('');
}

export default phoneFormat;