import { Link } from 'react-router-dom'
import './ItemSocialMedia.scss'
import Icon from '../icons/Icons'

export default function ItemSocialMedia(props) {
    return <li className={props.className ? `itemSM ${props.className}` : 'itemSM'}>
        <Link className={props.linkClass ? `link__itemSM ${props.linkClass}` : 'link__itemSM'} to={props.to}>
            <Icon className={props.iconClass ? `icon__itemSM ${props.iconClass}` : 'icon__itemSM'} name={props.icon} />
            <p className={props.nameClass ? `name__itemSM ${props.nameClass}` : 'name__itemSM'}>{props.name}</p>
        </Link>
    </li>
}