//Styles
import '../styles/components_styles/sidebar.css'
//Components
import IconButton from "./IconButton";
//svgs
import piechart_svg from "../svg/piechart.svg"
import income_svg from "../svg/income.svg"
import spending_svg from "../svg/spending.svg"
import savings_svg from "../svg/savings.svg"

export default function SideBar(){

    return(<div className="sidebar sidebar-closed">
        <IconButton
            svg = {piechart_svg}
            selected={true}
            open = {false}
            text='Home Dashboard'
        />

        <IconButton
            svg = {income_svg}
            selected={false}
            open = {false}
            text = "Income"/>

        <IconButton 
            svg = {spending_svg}
            selected={false}
            open = {false}
            text = "Spending"/>

        <IconButton
            svg = {savings_svg}
            selected={false}
            open={false}
            text="Savings"/>
            
    </div>)
}
