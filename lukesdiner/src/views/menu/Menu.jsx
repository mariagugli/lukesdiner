import { useEffect, useState } from 'react';
import { IMGCATEGORIES } from '../../../public/images-menuCategories';
import CategoryList from '../../components/categoryList/CategoryList';
import './Menu.scss'

export default function Menu() {

    const listCategories = IMGCATEGORIES;

    const [ stickyClass, setStickyClass ] = useState('');

    useEffect(() => {
        window.addEventListener( 'scroll', stickyCategoryMenu);
        return () => {
            window.removeEventListener( 'scroll', stickyCategoryMenu)
        };
    }, ['smooth']);

    const stickyCategoryMenu = () => {
        if (window !== undefined) {
          const windowHeight = window.scrollY;
          const windowWidth = window.innerWidth;
          if(windowWidth > 1228) {
            windowHeight > 126 ? setStickyClass('categoryMenu--fixed') : setStickyClass('');
          } else {
            windowHeight > 60 ? setStickyClass('categoryMenu--fixed') : setStickyClass('');
          }
        }
      };

    return <>
        <section className='sectionMenu__pattern section__subtopbarMenu'>
            <article className={location.pathname === '/menu' ? 'article__menuCategory' : 'display--none'}>
                <h1 className='text-align--center'>Menu</h1>
                <div className={`categoryMenu ${stickyClass}`}>
                    <CategoryList />
                    <div className="name__category">
                        <h2 className='h3 text-align--center title__sections'>All</h2>
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
                            <h2 className='h3 text-align--center title__sections'>{category.title}</h2>
                        </div>
                    </div>
                </article>
            ))}
        </section>
        <section className='sectionMenu__pattern section__menuList'>

        </section>
    </>
    
}