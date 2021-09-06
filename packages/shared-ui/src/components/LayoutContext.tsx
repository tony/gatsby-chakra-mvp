import React from "react";

export interface State {
  siteMetadata: Partial<GatsbyTypes.SiteSiteMetadata>;
}
export enum ActionType {
  SET = "SET",
}
type Action = {
  type: ActionType.SET;
  siteMetadata?: State["siteMetadata"];
};

export const DEFAULT_STATE: State = {
  siteMetadata: {},
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET: {
      return {
        ...state,
        ...action,
      };
    }
  }
};

export const LayoutContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: DEFAULT_STATE, dispatch: () => undefined });

export const LayoutProvider: React.FC<{
  siteMetadata: State["siteMetadata"];
}> = ({ children, siteMetadata }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...DEFAULT_STATE,
    siteMetadata,
  });

  return (
    <LayoutContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
