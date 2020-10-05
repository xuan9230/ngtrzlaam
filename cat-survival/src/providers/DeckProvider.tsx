/**
 * Provider for deck related data
 */

import React from "react";

import actionTypes from "./actionTypes";
import { EventEffect } from "../baseTypes";

type DeckState = {
  /**
   * Currently selected cat ID
   */
  catId?: string;
  /**
   * Effects of the current event
   */
  eventEffects: EventEffect[];
};

/**
 * Actions
 */
type Action =
  | {
      type: typeof actionTypes.SET_SELECTED_CAT_ID;
      catId: string;
    }
  | {
      type: typeof actionTypes.SET_EVENT_EFFECTS;
      eventEffects: EventEffect[];
    };

interface DeckContextType {
  state: DeckState;
  dispatch: React.Dispatch<Action>;
}

const DeckContext = React.createContext<DeckContextType | undefined>(undefined);

function deckReducer(state: DeckState, action: Action): DeckState {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CAT_ID:
      return {
        ...state,
        catId: action.catId,
      };
    case actionTypes.SET_EVENT_EFFECTS:
      return {
        ...state,
        eventEffects: action.eventEffects,
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
    eventEffects: [],
  });

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <DeckContext.Provider value={value} {...props} />;
}

export { DeckProvider, useDeck };
