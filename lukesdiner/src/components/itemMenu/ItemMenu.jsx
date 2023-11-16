import Btn from '../buttons/Btn';
import './ItemMenu.scss';

export default function ItemMenu(props) {
    return <li className={props.className ? `itemMenu ${props.className}` : 'itemMenu'}>
        <div className={props.bgimgClass ? `bgimg__itemMenu ${props.bgimgClass}` : 'bgimg__itemMenu'}>
            <img className={props.imgClass ? `img__itemMenu ${props.imgClass}` : 'img__itemMenu'} src={props.img} alt={props.altimg} />
        </div>
        <div className={props.infoClass ? `info__itemMenu ${props.infoClass}` : 'info__itemMenu'}>
            <p className={props.nameClass ? `name__itemMenu ${props.nameClass}` : 'name__itemMenu'}>{props.name}</p>
            <p className={props.priceClass ? `price__itemMenu ${props.priceClass}` : 'price__itemMenu'}>{props.price}</p>
        </div>
        <h5 className={props.categoryClass ? `category__itemMenu ${props.categoryClass}` : 'category__itemMenu'}>{props.category}</h5>
        <Btn 
            isLinkBtnStyle={true} 
            to={props.linkto} 
            size={props.btnsize} 
            className={props.btnclassName}
            text={props.btntext} />
    </li>
}