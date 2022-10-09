import withCounter from "./withCounter";

const HoverCounter = ({incrementCount, count}) => {

    return (
        <button onMouseOver={incrementCount}>
            Hovered {count} times
        </button>
    )
}
export default withCounter(HoverCounter);