import { createContext } from 'react'

export const SidebarContext = createContext(null)
export const SidebarDispatchContext = createContext(null)

export function sidebarReducer (state, action) {
    /*
    state : [open: boolean, dash: int]
        open: whether side bar is open or not
        dash: what dashboard is selected
    */

        
}