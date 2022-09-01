import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
    const counter = useCounter(prevCounter => prevCounter + 1, 0);

    return <Card>{counter}</Card>;
};

export default ForwardCounter;
