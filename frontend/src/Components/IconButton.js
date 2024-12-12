import "../styles/components_styles/IconButton.css"

export default function  IconButton({svg, alt, open, text, selected}){
    return(
        //Add on open/close class based on whether the side bar is open or closed
        //change background color by adding selected class
        <div className={`iconbutton ${open ? 'iconbutton-open' : 'iconbutton-closed'} ${selected  ? 'selected': ''}`}>
            
            <img src = {svg} alt = {alt}></img>

            {/* Hide text is side bar is closed */}
            <div className="text-div" hidden={!open}>
                <p>{text}</p>
            </div>
        </div>
    )
}