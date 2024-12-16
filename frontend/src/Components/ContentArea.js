//styles
import '../styles/components_styles/contentarea.css'

//Components
import IconButton from './IconButton'
import Dashboard from './Dashboard'

// SVGs
import sidebar_open_svg from '../svg/sidebar_open.svg'
import sidebar_closed_svg from '../svg/sidebar_closed.svg'
import dots from '../svg/dots.svg'

//context
import { useSiderbarContext } from '../Contexts/SidebarContext'


export default function ContentArea(){

    return (
        <div className='contentarea'>
            <Banner/>
            <Dashboard/>
        </div>
    )
}


function Banner(){

    const sidebarState = useSiderbarContext()

    return <div className='banner'>
        <IconButton
            svg = {sidebarState.open ? sidebar_open_svg : sidebar_closed_svg}
            banner = {true}
            dash_no={0}/>
        
        <div className= 'banner-padding-box'></div>

        <IconButton
            svg={dots}
            banner = {true}
            dash_no={1}/> 
    </div>
}