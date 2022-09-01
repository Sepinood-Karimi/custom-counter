import {useEffect, useState} from "react";

const useCounter = (countFn, initValue) => {
    const [counter, setCounter] = useState(initValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(countFn)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;

};

export default useCounter;