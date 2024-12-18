//Styles
import '../styles/components_styles/sidebar.css'

import { useContext } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
//Components
import IconButton from "./IconButton";
//svgs
import piechart_svg from "../svg/piechart.svg"
import income_svg from "../svg/income.svg"
import spending_svg from "../svg/spending.svg"
import savings_svg from "../svg/savings.svg"

export default function Sidebar(){

    const sidebarState = useContext(SidebarContext)
    const open = sidebarState.open

    return(<div className={`sidebar sidebar-${open ? 'open' : 'closed'}`}>
        <AvailableBalance sidebarState={sidebarState}/>

        <IconButton
            svg = {piechart_svg}
            text='Home'
            dash_no={2}
        />

        <IconButton
            svg = {income_svg}
            text = "Income"
            dash_no={3}/>

        <IconButton 
            svg = {spending_svg}
            text = "Spending"
            dash_no={4}/>

        <IconButton
            svg = {savings_svg}
            text="Savings"
            dash_no={5}/>
            
    </div>)
}


function AvailableBalance({ sidebarState }){

    return(
        <div className={`availableBalance-container ${!sidebarState.open ? 'ab-closed' : 'ab-open'}`}>
            <h2 className='ab-header'>Available Balance</h2>
            <h2 className='ab-header balance'>$12,000</h2>
        </div>
    )
}