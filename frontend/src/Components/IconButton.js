import "../styles/components_styles/iconbutton.css"

/*
* Icon button component used in the app
* @param svg - svg image to put in the button
* @param alt - alt text
* @param open (optional) used for icon buttons in side bar, whether or not the side bar is open
                        will be replace with state soon
*@param text (optional) - sidebar text
*@param selected (optional)- whether or not the icon is selected (side bar)
*/
export default function  IconButton({svg, open, text, selected, banner}){
     
    return(
        //Add on open/close class based on whether the side bar is open or closed
        //change background color by adding selected class
        <div className={`iconbutton ${open ? 'iconbutton-open' : 'iconbutton-closed'} ${selected  ? 'selected': ''} ${banner? 'banner-icon': ''}`}>
            
            <img src = {svg} alt = {text}></img>

            {/* Hide text is side bar is closed */}
            <div className="text-div" hidden={!open}>
                <p>{text}</p>
            </div>
        </div>
    )
} 