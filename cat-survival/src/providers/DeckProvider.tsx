/**
 * Provider for deck related data
 */

import React from "react";

import actionTypes from "./actionTypes";

type DeckState = {
  /**
   * Currently selected cat ID
   */
  catId?: string;
  /**
   * Remaining swipe times for today
   */
  remainingSwipes: number;
  /**
   * Ending scene
   */
  scene?: string;
};

/**
 * Actions
 */
type SetSelectedCatIdAction = {
  type: typeof actionTypes.SET_SELECTED_CAT_ID;
  catId: string;
};

type SetSceneAction = {
  type: typeof actionTypes.SET_SCENE;
  scene: string;
};

type Action = SetSelectedCatIdAction | SetSceneAction;

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
    case actionTypes.SET_SCENE:
      return {
        ...state,
        scene: action.scene,
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
    remainingSwipes: 5,
  });

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <DeckContext.Provider value={value} {...props} />;
}

export { DeckProvider, useDeck };
