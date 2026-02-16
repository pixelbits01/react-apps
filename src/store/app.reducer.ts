export type AppState = { count: number };

export type AppAction = { type: "INCREMENT" } | { type: "DECREMENT" };

export const initialState: AppState = { count: 0 };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
