import './Category.scss';

export default function Category(props) {

    return <div className={props.className ? `category ${props.className}` : 'category'}>
        <img className={props.imgClass ? `category__img ${props.imgClass}` : 'category__img'} src={props.img} alt={props.imgalt} />
        <p className={props.nameClass ? `category__name ${props.nameClass}` : 'category__name'}>{props.name}</p>
    </div>
}