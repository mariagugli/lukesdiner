import { Link } from 'react-router-dom';
import { IMGCATEGORIES } from '../../../public/imgs/images-menuCategories';
import Btn from '../buttons/Btn';
import Category from '../category/Category';
import './CategoryList.scss';

export default function CategoryList(props) {

    const listado = IMGCATEGORIES;

    return <div className={props.className ? `category__list ${props.className}` : 'category__list'}>
        {listado.map(img =>
            <Link className={props.classlink ? `category__link ${props.classlink}` : 'category__link'} to={ '/menu/' + img.id} key={img.id}>
                <Category img={img.img} altimg={img.title} name={img.title} />
            </Link>
        )}
    </div>
}