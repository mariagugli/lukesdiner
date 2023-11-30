import Btn from '../buttons/Btn';
import './Product.scss';

export default function Product(props) {

    return <li className={props.className ? `product ${props.className}` : 'product'}>
        <img 
            className={props.imgClass ? `img__product ${props.imgClass}` : 'img__product'}
            src={props.img}
            alt={props.altimg} 
        />
        <p className={props.nameClass ? ` h4 name__product ${props.nameClass}` : 'h4 name__product'}>{props.name}</p>
        <p className={props.priceClass ? `price__product ${props.priceClass}` : 'price__product'}>{props.price}</p>
        <div className={props.btnsClass ? `btns__product ${props.btnsClass}`: 'btns__product'}>
            <Btn 
                type='primary'
                size={props.btnsize ? `product__size ${props.btnsize ? props.btnsize : ''}`: 'product__size'} 
                text='Add to cart'
            />
            <Btn 
                className={props.btninfoClass ? `btninfo__product ${props.btninfoClass}`: 'btninfo__product'}
                type='secondary'
                size={props.btnsize ? `product__size ${props.btnsize ? props.btnsize : ''}`: 'product__size'}
                text='i'
            />
        </div>
    </li>
}