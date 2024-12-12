import IconButton from "./IconButton";
import piechart_svg from "../svg/piechart.svg"
import '../styles/components_styles/sidebar.css'

export default function SideBar(){

    return(<div className="sidebar sidebar-closed">
        <IconButton
            svg = {piechart_svg}
            alt = "Home Dashboard"
            selected={false}
            open = {false}
            text={'Home Dashboard'}
        />
    </div>)
}
