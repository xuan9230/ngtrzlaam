/**
 * Provider for deck related data
 */

import React from "react";
import { Cat } from "../generated/graphql";
import actionTypes from "../types/actionTypes";

type DeckState = {
  /**
   * Currently selected cat
   */
  cat?: Cat;
  /**
   * Remaining swipe times for today
   */
  remainingSwipes: number;
};

type Action = {
  type: typeof actionTypes.SET_CURRENT_CAT;
  cat: Cat;
};

interface DeckContextType {
  state: DeckState;
  dispatch: React.Dispatch<Action>;
}

const DeckContext = React.createContext<DeckContextType | undefined>(undefined);

function deckReducer(state: DeckState, action: Action): DeckState {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CAT:
      return {
        ...state,
        cat: action.cat,
      };
    default:
      return state;
  }
}

function useDeck() {
  const context = React.useContext(DeckContext);
  if (!context) {
    throw new Error(`useDeck must be used within a CountProvider`);
  }

  return context;
}

function DeckProvider(props: any) {
  const [state, dispatch] = React.useReducer(deckReducer, {
    remainingSwipes: 3,
  });

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <DeckContext.Provider value={value} {...props} />;
}

export { DeckProvider, useDeck };
