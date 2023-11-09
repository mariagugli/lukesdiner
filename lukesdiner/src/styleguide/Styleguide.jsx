import Btn from '../components/buttons/Btn'
import Icon from '../components/icons/Icons'
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
                    
            </article>
        </section>
    </>
}