import Btn from '../buttons/Btn';
import './Product.scss';

export default function Product(props) {

    return <li className={props.className ? `product ${props.className}` : 'product'}>
        <img src={props.img} alt={props.altimg} />
        <p className="h4">{props.name}</p>
        <p>{props.price}</p>
        <div>
            <Btn 
                size={props.btnsize} 
                text='Add to cart'
            />
            <Btn 
                type='secondary'
                size={props.btnsize}
                text='i'
            />
        </div>
    </li>
}