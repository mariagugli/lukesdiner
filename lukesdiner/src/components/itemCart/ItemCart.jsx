import Icon from '../icons/Icons';
import './ItemCart.scss';

export default function ItemCart(props) {
    return <li className={props.className ? `itemCart ${props.className}` : 'itemCart'}>
        <span className={props.infoItemClass ? `info__itemCart ${props.infoItemClass}` : 'info__itemCart'}>
            <p data-number='x' className={props.numberClass ? `number__itemCart ${props.numberClass}` : 'number__itemCart'}>{props.number}</p>
            <p className={props.nameClass ? `name__itemCart ${props.nameClass}` : 'name__itemCart'}>{props.name}</p>
        </span>
        <img
            className={props.imgClass ? `img__itemCart ${props.imgClass}` : 'img__itemCart'}
            src={props.img} 
            alt={props.altltimg} 
        />
        <Icon
            className={props.iconClass ? `icon__itemCart ${props.iconClass}` : 'icon__itemCart'} 
            name='cross' 
        />
    </li>
}