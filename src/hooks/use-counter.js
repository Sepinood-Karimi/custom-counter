import {useEffect, useState} from "react";

const useCounter = (countFn) => {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounter(countFn)
        },1000);

        return ()=>clearInterval(interval);
    },[]);

    return counter;

};

export default useCounter;