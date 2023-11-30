import Btn from '../buttons/Btn'
import './ItemFAQ.scss'

export default function ItemFAQ(props) {
    return <li className={props.className ? `itemFAQ ${props.className}` : 'itemFAQ'}>
        <img className={props.imgClass ? `img__itemFAQ ${props.imgClass}` : 'img__itemFAQ'} src={props.img} alt={props.altimg} />
        <p>{props.question}</p>
        <Btn
            isLink={true}
            to={props.to}
            type='secondary'
            size='small'
            text={`See ${props.for}`}
        />
    </li>
}