import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const InitialState = {
  startups: [
    {
      id: 1,
      name: "CourseIt",
      description: "Desc Courseit",
    },
    {
      id: 2,
      name: "Endava",
      description: "Desc Endava",
    },
  ],
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_STARTUP":
      return {
        ...state,
        startups: [
          ...state.startups,
          {
            name: action?.payload?.title,
            description: action?.payload?.description,
          },
        ],
      };
    default:
      return state;
  }
};

export const addStartup = (title, description) => (dispatch) => {
  dispatch({
    type: "ADD_STARTUP",
    payload: { title, description },
  });
};

export function initializeStore() {
  return createStore(
    reducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
  );
}
