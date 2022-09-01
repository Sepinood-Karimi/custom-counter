import Card from './Card';
import useCounter from "../hooks/use-counter";

const MultipleTwoCounter = () => {
    const counter = useCounter(prevCounter => prevCounter * 2,1);

    return <Card>{counter}</Card>;
};

export default MultipleTwoCounter;
