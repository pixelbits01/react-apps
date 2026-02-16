import { useGlobalState } from '../store/global-state-provider';

const Home = () => {
    const { state, dispatch } = useGlobalState();
    return <>
        <h2>Home Page</h2>
        <button onClick={() => dispatch({
            type: 'INCREMENT'
        })}>Increment</button>
        <button onClick={() => dispatch({
            type: 'DECREMENT'
        })}>Decrement</button>
    </>;
};
export default Home;
