import '../styles/components_styles/contentarea.css'

import IconButton from './IconButton'
import Dashboard from './Dashboard'

import sidebar_open_svg from '../svg/sidebar_open.svg'
import sidebar_closed_svg from '../svg/sidebar_closed.svg'
import dots from '../svg/dots.svg'

export default function ContentArea(){

    return (

        <div className='contentarea'>
            <Banner/>
            <Dashboard/>
        </div>
    )
}


function Banner(){

    return <div className='banner'>
        <IconButton
            svg = {sidebar_closed_svg}
            banner = {true}/>
        
        <div className= 'banner-padding-box'></div>

        <IconButton
            svg={dots}
            banner = {true}/> 
    </div>
}