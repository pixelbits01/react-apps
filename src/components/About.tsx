import { useGlobalState } from '../store/global-state-provider';

const About = () => {
  const { state, dispatch } = useGlobalState();

  return <>
    <h2>About Page</h2>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </>;
};
export default About;
