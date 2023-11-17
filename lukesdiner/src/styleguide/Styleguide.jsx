import Btn from '../components/buttons/Btn'
import Category from '../components/category/Category'
import CategoryList from '../components/categoryList/CategoryList'
import Icon from '../components/icons/Icons'
import Input from '../components/inputs/Input'
import ItemMenu from '../components/itemMenu/ItemMenu'
import ListMenu from '../components/listMenu/ListMenu'
import Product from '../components/product/Product'
import Select from '../components/select/Select'
import './Styleguide.scss'

export default function Styleguide() {

    return <>
        <p>Hey! This is a styleguide for</p>
        <h1>Luke's Diner website</h1>
        <section className='styleguideSection__pattern'>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Primary Buttons</h2>
                <div>
                    <Btn type='primary' size='xsmall' text='Send' />
                    <Btn type='primary' size='small' text='Send' />
                    <Btn type='primary' text='Send' />
                    <Btn type='primary' size='big' text='Send' />
                    <Btn type='primary' size='xbig' text='Send' />
                </div>
                    
            </article>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Secondary Buttons</h2>
                <div>
                    <Btn type='secondary' size='xsmall' text='Send' />
                    <Btn type='secondary' size='small' text='Send' />
                    <Btn type='secondary' text='Send' />
                    <Btn type='secondary' size='big' text='Send' />
                    <Btn type='secondary' size='xbig' text='Send' />
                </div>
            </article>
        </section>
        <section className='styleguideSection__pattern'>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Primary Links</h2>
                <div>
                    <Btn isLink={true} to="#" type='primary' size='xsmall' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='small' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='big' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='xbig' text='Send' icon='arrow-right' />
                </div>
                    
            </article>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Secondary Links</h2>
                <div>
                    <Btn isLink={true} to="#" type='secondary' size='xsmall' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='secondary' size='small' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='secondary' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='secondary' size='big' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='secondary' size='xbig' text='Send' icon='arrow-right' />
                </div>
            </article>
        </section>
        <section className='styleguideSection__pattern'>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Icons</h2>
                <div className='listItemsWrap'>
                    <Icon name='arrow-down' />
                    <Icon name='arrow-up' />
                    <Icon name='arrow-left' />
                    <Icon name='arrow-right' />
                    <Icon name='circle' />
                    <Icon name='minus' />
                    <Icon name='plus' />
                    <Icon name='cross' />
                    <Icon name='check' />
                    <Icon name='cart' />
                    <Icon name='magnify' />
                    <Icon name='map-marker' />
                    <Icon name='phone' />
                    <Icon name='email' />
                    <Icon name='instagram' />
                    <Icon name='twitter' />
                    <Icon name='facebook' />
                </div>
                <h3 className='h4 subtitle__styleguide'>Sizes</h3>
                <div className='listItemsWrap'>
                    <div className='itemsLine'>
                        <Icon name='arrow-right' size='xsmall'/>
                        <Icon name='arrow-right' size='small'/>
                        <Icon name='arrow-right' />
                        <Icon name='arrow-right' size='big'/>
                        <Icon name='arrow-right' size='xbig'/>
                    </div>
                    <div className='itemsLine'>
                        <Icon name='instagram' size='xsmall'/>
                        <Icon name='instagram' size='small'/>
                        <Icon name='instagram' />
                        <Icon name='instagram' size='big'/>
                        <Icon name='instagram' size='xbig'/>
                    </div>
                </div>
            </article>
        </section>
        <section className='styleguideSection__pattern sectionInputs__styleguide'>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Primary Inputs</h2>
                <div className='listItems__styleguide'>
                    <Input size='xsmall' placeholder='enter your name' />
                    <Input size='small' placeholder='enter your name' />
                    <Input placeholder='enter your name' />
                    <Input size='big' placeholder='enter your name' />
                    <Input size='xbig' placeholder='enter your name' />
                </div>
                <div className="inputsTypes__styleguide">
                    <h3 className="subtitle__styleguide margin-bottom__lv03">Checkboxes</h3>
                    <Input size='xsmall' inputtype='checkbox' label='Option A' />
                    <Input size='small' inputtype='checkbox' label='Option A' />
                    <Input inputtype='checkbox' label='Option A' />
                    <Input size='big' inputtype='checkbox' label='Option A' />
                    <Input size='xbig' inputtype='checkbox' label='Option A' />
                </div>
                <div className="inputsTypes__styleguide">
                    <h3 className="subtitle__styleguide margin-bottom__lv03">Radios</h3>
                    <Input size='xsmall' inputtype='radio' label='Option A' />
                    <Input size='small' inputtype='radio' label='Option A' />
                    <Input inputtype='radio' label='Option A' />
                    <Input size='big' inputtype='radio' label='Option A' />
                    <Input size='xbig' inputtype='radio' label='Option A' />
                </div>
            </article>
            <article className="styleguideArticle__pattern">
                <h2 className='h3'>Secondary Inputs</h2>
                <div className='listItems__styleguide'>
                    <Input type='secondary' size='xsmall' placeholder='enter your name' />
                    <Input type='secondary' size='small' placeholder='enter your name' />
                    <Input type='secondary' placeholder='enter your name' />
                    <Input type='secondary' size='big' placeholder='enter your name' />
                    <Input type='secondary' size='xbig' placeholder='enter your name' />
                </div>
                <div className="inputsTypes__styleguide">
                    <h3 className="subtitle__styleguide margin-bottom__lv03">Checkboxes</h3>
                    <Input type='secondary' size='xsmall' inputtype='checkbox' label='Option B' />
                    <Input type='secondary' size='small' inputtype='checkbox' label='Option B' />
                    <Input type='secondary' inputtype='checkbox' label='Option B' />
                    <Input type='secondary' size='big' inputtype='checkbox' label='Option B' />
                    <Input type='secondary' size='xbig' inputtype='checkbox' label='Option B' />
                </div>
                <div className="inputsTypes__styleguide">
                    <h3 className="subtitle__styleguide margin-bottom__lv03">Radios</h3>
                    <Input type='secondary' size='xsmall' inputtype='radio' label='Option A' />
                    <Input type='secondary' size='small' inputtype='radio' label='Option A' />
                    <Input type='secondary' inputtype='radio' label='Option A' />
                    <Input type='secondary' size='big' inputtype='radio' label='Option A' />
                    <Input type='secondary' size='xbig' inputtype='radio' label='Option A' />
                </div>
            </article>
        </section>
        <section className='styleguideSection__pattern sectionInputs__styleguide'>
            <article className="styleguideArticle__pattern">
                <h2 className='h3' >Primary Selects</h2>
                <Select type='primary' size='xsmall' />
                <Select type='primary' size='small' />
                <Select type='primary' size='default' />
                <Select type='primary' size='big' />
                <Select type='primary' size='xbig' />
            </article>
            <article className="styleguideArticle__pattern">
                <h2 className='h3' >Secondary Selects</h2>
                <Select type='secondary' size='xsmall' />
                <Select type='secondary' size='small' />
                <Select type='secondary' size='default' />
                <Select type='secondary' size='big' />
                <Select type='secondary' size='xbig' />
            </article>
        </section>
        <section className='styleguideSection__pattern section__list--styleguide'>
            <Category img='../../imgs/fotos-menu/breakfast/frenchtoast.webp' alt='Breakfast' name='Breakfast' />
            <CategoryList />
        </section>
        <section className='styleguideSection__pattern section__list--styleguide'>
            <ItemMenu 
                img='../../imgs/fotos-menu/sandwiches/turkeysandwich-shadow.webp'
                altimg='Turkey Sandwich'
                name='Turkey Sandwich'
                price='$6.55'
                category='Sandwiches'
                linkto='/menu/sandwiches'
                btnsize='small'
                btntext='See all'
            />
            <ListMenu />
        </section>
        <section className='styleguideSection__pattern section__list--styleguide'>
            <Product
                img='../../imgs/fotos-menu/specials/chickennoodlesoup.webp'
                altimg='Chicken Noodles Soup'
                name='Chicken Noodles Soup'
                price='$6.55'
            />
        </section>
    </>
}