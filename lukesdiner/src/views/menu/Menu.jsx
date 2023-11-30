import { useEffect, useState } from 'react';
import { IMGCATEGORIES } from '../../../public/images-menuCategories';
import CategoryList from '../../components/categoryList/CategoryList';
import './Menu.scss'
import { PRODUCTS } from '../../../public/products';
import Product from '../../components/product/Product';
import { useParams } from 'react-router-dom';

export default function Menu() {

    const listCategories = IMGCATEGORIES;
    const listProducts = PRODUCTS;

    const params = useParams();
    const categoryId = params.categoryId;
    const selectedListProducts = categoryId
        ? listProducts.filter(product => product.category === categoryId)
    : listProducts;

    const [ stickyClass, setStickyClass ] = useState('');
    const [ changeSectionMenu, setChangeSectionMenu ] = useState('');

    useEffect(() => {
        window.addEventListener( 'scroll', stickyCategoryMenu);
        return () => {
            window.removeEventListener( 'scroll', stickyCategoryMenu)
        };
    }, []);

    const stickyCategoryMenu = () => {
        if (window !== undefined) {
          const windowHeight = window.scrollY;
          const windowWidth = window.innerWidth;
          const bp = windowWidth > 1228 ? 140 : windowWidth > 892 ? 138 : 92;

          setStickyClass(windowHeight > bp ? 'categoryMenu--fixed' : '');
          setChangeSectionMenu(windowHeight > bp ? 'section__menuList' : '')
        }
    };

    return <>
        <section className='sectionMenu__pattern section__subtopbarMenu'>
            <article className={location.pathname === '/menu' ? 'article__menuCategory' : 'display--none'}>
                <h1 className='text-align--center'>Menu</h1>
                <div className={`categoryMenu ${stickyClass}`}>
                    <CategoryList />
                    <div className="name__category">
                        <h2 className='h4 text-align--center title__sections'>All</h2>
                    </div>
                </div>
            </article>
            {listCategories &&
            listCategories.map(category => (
                <article className={location.pathname === `/menu/${category.id}` ? 'article__menuCategory'
                : 'display--none'} key={category.id}>
                    <h1 className='text-align--center'>Menu</h1>
                    <div className={`categoryMenu ${stickyClass}`}>
                        <CategoryList />
                        <div className="name__category">
                            <h2 className='h4 text-align--center title__sections'>{category.title}</h2>
                        </div>
                    </div>
                </article>
            ))}
        </section>
        <section className={`sectionMenu__pattern ${changeSectionMenu}`}>
            <ul className='list__products'>
                {selectedListProducts.map(product => (
                    <Product 
                        key={product.id}
                        img={product.img}
                        altimg={product.name}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </ul>
        </section>
    </>
    
}