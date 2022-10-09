import withCounter from "./withCounter";

const ClickCounter = ({incrementCount, count}) => {

    return (
        <button onClick={incrementCount}>
            Clicked {count} times
        </button>
    )
}
export default withCounter(ClickCounter);