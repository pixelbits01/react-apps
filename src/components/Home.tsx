import { useGlobalState } from '../store/global-state-provider';

export const Home = () => {
    const { dispatch } = useGlobalState();
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
