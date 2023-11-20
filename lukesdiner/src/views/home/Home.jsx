import './Home.scss'
import Slogan from '../../components/svgTitle/Slogan'
import Btn from '../../components/buttons/Btn'
import ListMenu from '../../components/listMenu/ListMenu'

export default function Home() {
    
    return <>
        <section className="section__intro sectionHome__pattern">
            <article className="article__sloganIntro">
                <Slogan size='xsmall' color='yellow'/>
            </article>
            <Btn type='secondary' size='big' text='Order'/>
        </section>
        <section className="section__menu sectionHome__pattern">
            <h1 className='title__sectionMenu'>Delicious healthy food</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic voluptates magnam magni vitae, pariatur omnis, harum odio fugiat aspernatur officia accusantium eveniet totam inventore delectus possimus culpa deleniti ea.</p>
            <ListMenu />
        </section>
    </>
    
}