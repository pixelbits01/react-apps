import { Outlet, Link } from "react-router-dom";
import { useGlobalState } from "../store/global-state-provider";

export function Layout() {
    const { state, dispatch } = useGlobalState();

    return (
      <>
        <nav>
          <Link to="/about"> About </Link> |{' '}
          <Link to="/home">Home</Link>
        </nav>
        <p>Count: {state.count}</p>
        <Outlet />
      </>
    );
  }