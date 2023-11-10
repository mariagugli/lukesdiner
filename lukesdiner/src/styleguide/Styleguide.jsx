import Btn from '../components/buttons/Btn'
import Icon from '../components/icons/Icons'
import Slogan from '../components/svgTitle/Slogan'
import './Styleguide.scss'

export default function Styleguide() {
    return <>
        <p>Hey! This is a styleguide for</p>
        <h1>Luke's Diner website</h1>
        <section className='styleguideSection__pattern'>
            <article className="styleguideArticle__pattern primarybtns__article">
                <h2 className='h3'>Primary Buttons</h2>
                <div>
                    <Btn type='primary' size='xsmall' text='Send' />
                    <Btn type='primary' size='small' text='Send' />
                    <Btn type='primary' text='Send' />
                    <Btn type='primary' size='big' text='Send' />
                    <Btn type='primary' size='xbig' text='Send' />
                </div>
                    
            </article>
            <article className="styleguideArticle__pattern secondarybtns__article">
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
            <article className="styleguideArticle__pattern primarybtns__article">
                <h2 className='h3'>Primary Links</h2>
                <div>
                    <Btn isLink={true} to="#" type='primary' size='xsmall' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='small' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='big' text='Send' icon='arrow-right' />
                    <Btn isLink={true} to="#" type='primary' size='xbig' text='Send' icon='arrow-right' />
                </div>
                    
            </article>
            <article className="styleguideArticle__pattern secondarybtns__article">
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
            <article className="styleguideArticle__pattern primarybtns__article">
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
        <section>
            <Slogan color='navy' size='default' />
        </section>
    </>
}