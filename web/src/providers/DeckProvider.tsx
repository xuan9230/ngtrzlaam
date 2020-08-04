/**
 * Provider for deck related data
 */

import React from "react";

import { Scalars } from "../generated/graphql";
import actionTypes from "../types/actionTypes";

type DeckState = {
  /**
   * Currently selected cat ID
   */
  catId?: Scalars["ID"];
  /**
   * Currently selected cat details
   */
  // cat?: Cat;
  /**
   * Remaining swipe times for today
   */
  remainingSwipes: number;
  /**
   * Events
   */
  // // eventMap: {
  // //   [key: string]: Event;
  // // };
  // events: Event[];
};

/**
 * Actions
 */
type SetSelectedCatId = {
  type: typeof actionTypes.SET_SELECTED_CAT_ID;
  catId: Scalars["ID"];
};

// type SetCurrentCatAction = {
//   type: typeof actionTypes.SET_CURRENT_CAT;
//   cat: Cat;
// };

// type SetEventsAction = {
//   type: typeof actionTypes.SET_EVENTS;
//   // eventMap: {
//   //   [key: string]: Event;
//   // };
//   events: Event[];
// };

// type UpdateCatAttributesAction = {
//   type: typeof actionTypes.UPDATE_CAT_ATTRIBUTES;
//   eventEffects: EventEffect[];
// };

type Action = SetSelectedCatId;
// | SetCurrentCatAction
// | SetEventsAction
// | UpdateCatAttributesAction;

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
    // case actionTypes.SET_CURRENT_CAT:
    //   return {
    //     ...state,
    //     cat: action.cat,
    //   };
    // case actionTypes.SET_EVENTS:
    //   return {
    //     ...state,
    //     events: action.events,
    //   };
    // case actionTypes.UPDATE_CAT_ATTRIBUTES:
    //   const updatedCat = produce(state.cat, (draftCat) => {
    //     if (!draftCat) return undefined;

    //     action.eventEffects.forEach((effect) => {
    //       const { key, delta } = effect;
    //       if (!key) throw new Error("Event effect must contain attribute key");

    //       draftCat[key] = draftCat[key] + delta;
    //     });
    //   });

    //   return {
    //     ...state,
    //     cat: updatedCat,
    //   };
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
    // events: [],
  });

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <DeckContext.Provider value={value} {...props} />;
}

export { DeckProvider, useDeck };
