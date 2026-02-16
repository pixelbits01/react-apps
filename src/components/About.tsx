import { useGlobalState } from '../store/global-state-provider';

export const About = () => {
  const { dispatch } = useGlobalState();

  return <>
    <h2>About Page</h2>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </>;
};
export default About;
