import { createContext, useContext, useReducer } from "react"; 

// Context for the state, and context for the dispatch function (to update state)
export const SidebarContext = createContext(null);
export const SidebarDispatchContext = createContext(null);

/*
JSX Component that provides the sidebarContext and SidebarDispatchContext to all children
*/
export function SidebarContextProvider({ children }) {

  const [sidebarState, sidebarDispath] = useReducer(
    sidebarReducer,
    initialSidebarState
  );


  return (
    <SidebarContext.Provider value={sidebarState}>
      <SidebarDispatchContext.Provider value={sidebarDispath}>
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarContext.Provider>
  );
}

/*
functions for using sidebar state context and dispatchcontext
*/
export function useSiderbarContext() {
  return useContext(SidebarContext);
}

export function useSidebarDispatchContext() {
  return useContext(SidebarDispatchContext);
}

/*
Reducer for sidebar state

for toggling sidebar use:
  action = {type: 'toggle-sidebar'}

for selecting an icon use:
  action = {type: 'dash-icon', dash_no: 'the icon's number'}
*/
export function sidebarReducer(state, action) {
  /*state : {open : boolean, dash_no : int} [0,1,2,3,4]*/
  switch (action.type) {
    // If side bar is toggled
    case "toggle-sidebar": {
      return {
        open: !state.open,
        dash_no: state.dash_no,
      };
    }
    case "dash-icon": {
      // If dash-icon (icon on the sidebar) is clicked
      return {
        open: state.open,
        dash_no: action.dash_no,
      };
    }
    default: {
      throw Error("Unkown action: ", action.type);
    }
  }
}

export const initialSidebarState = { open: false, dash_no: 2 };
