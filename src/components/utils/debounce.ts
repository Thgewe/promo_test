const debounce = (callback: () => any, ms: number) => {
    let delay = false;

    return () => {
        if (!delay) {
            callback();
            delay = true;
            setTimeout(() => {
                delay = false;
            }, ms)
        }
    }
}

export default debounce;