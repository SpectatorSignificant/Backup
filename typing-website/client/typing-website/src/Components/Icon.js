
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props){
    return (
            <a className='icon' href={props.href}><FontAwesomeIcon icon={props.icon} /></a>
        
    )
}

export default Icon