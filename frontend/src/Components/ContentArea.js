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
import { useSiderbarContext, useSidebarDispatchContext } from '../Contexts/SidebarContext'


export default function ContentArea(){
    const sidebarState = useSiderbarContext()
    const sidebarDispatch = useSidebarDispatchContext()

    return (
        <div className='contentarea' onClick={()=>{
            if (sidebarState.open){
                sidebarDispatch({type: 'toggle-sidebar'})
            }
        }}>
            <Banner sidebarState={sidebarState}/>
            <Dashboard/>
        </div>
    )
}


function Banner( {sidebarState} ){

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