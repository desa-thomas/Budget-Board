import "../styles/components_styles/iconbutton.css"

import { useSiderbarContext, useSidebarDispatchContext } from "../Contexts/SidebarContext"

export default function  IconButton({svg, text, banner, dash_no }){
    
    // Get sidebar state and dispatch function from context
    const sidebarState = useSiderbarContext()
    const sidebarDispatch = useSidebarDispatchContext()

    const open = (sidebarState.open & dash_no > 1) //Banner icons cannot be open i.e., dash_no < 1

    const selected = (dash_no == sidebarState.dash_no & dash_no > 1) //banner icons logic are not handled here

    return(
        //Add on open/close class based on whether the side bar is open or closed
        //change background color by adding selected class
        <div 
        onClick={()=>{click(sidebarDispatch, dash_no)}}
        
        // class name based on icon properties
        className={`iconbutton ${open ? 'iconbutton-opened' : 'iconbutton-closed'} ${selected  ? 'selected': ''} ${banner? 'banner-icon': ''}`}>
            
            <img src = {svg} alt = {text}></img>

            {/* Hide text is side bar is closed */}

            <div className={`text-div ${!open ? 'hidden' : ''}`}>
                <p>{text}</p>
            </div>

        </div>
    )
} 

function click(sidebarDispatch, dash_no){
    //Sidebar icons

    if (dash_no > 1){
        sidebarDispatch({
            type: 'dash-icon',
            dash_no: dash_no
        })
    }

    else if (dash_no==0){
        sidebarDispatch({
            type: 'toggle-sidebar'
        })
    }

    return
}