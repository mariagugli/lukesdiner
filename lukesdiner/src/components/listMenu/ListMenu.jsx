import { IMGCATEGORIES } from '../../../public/images-menuCategories';
import ItemMenu from '../itemMenu/ItemMenu';
import './ListMenu.scss';

export default function ListMenu(props) {
    
    const listado = IMGCATEGORIES;

    return <ul className={props.className ? `list__menu ${props.className}` : 'list__menu'}>
    {listado.map(img =>

        <ItemMenu 
            className={`
                ${img.id === 'all' ? 'display--none' : ''}
                ${img.position === 'down' ? 'itemMenu__down' : 'itemMenu__up'}
            `}
            img={img.img}
            altimg={img.subtitle}
            bgimgClass={
                img.bgcolor === 'turquoise' ? 'itemMenu__bgimg--turquoise'
                : img.bgcolor === 'yellowlight' ? 'itemMenu__bgimg--yellow__light' 
                : ''
            }
            name={img.subtitle}
            price={img.price}
            category={img.title}
            linkto={ img.id === 'all' ? '/menu/' : '/menu/' + img.id} key={img.id}
            btnsize='small'
            btntext='See all'
        />
    )}
</ul>
}