import './Home.scss'
import Slogan from '../../components/svgTitle/Slogan'
import Btn from '../../components/buttons/Btn'
import ListMenu from '../../components/listMenu/ListMenu'
import SquaresSeparation from '../../components/squaresSeparation/SquaresSeparation'
import ImgTeam from '../../components/imgReview/ImgReview'
import ImgReviewList from '../../components/imgReviewList/ImgReviewList'

export default function Home() {
    
    return <>
        <section className="section__intro sectionHome__pattern">
            <article className="article__sloganIntro">
                <Slogan size='xsmall' color='yellow'/>
            </article>
            <Btn 
                isLinkBtnStyle={true}
                to='/menu'
                type='secondary' 
                size='big' 
                text='Order'
            />
        </section>
        <section className="section__menu sectionHome__pattern">
            <article className='article__sectionMenu'>
                <h1 className='title__sectionMenu'>Delicious <br/> healthy food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic voluptates magnam magni vitae, pariatur omnis, harum odio fugiat aspernatur officia accusantium eveniet totam inventore delectus possimus culpa deleniti ea.</p>
            </article>
            
            <ListMenu />
        </section>
        <section className="sectionHome__pattern section__about">
            <SquaresSeparation 
                className='squareSeparation__home'
                colorlineup='navy' 
                colorlinedown='navy__lighter'
            />
            <article className="article__about">
                <h2 className='h1 text-yellow'>Who <br/> makes <br/> your food</h2>
                <div className="infoluke__articleAbout">
                    <div className="description__infoLuke">
                        <p className='text-white'>Hey, this is Luke. Incase you still don’t know me or my team, have a look and enjoy knowing a little more about us and our history.</p>
                        <Btn 
                            isLinkBtnStyle={true}
                            type='secondary' 
                            to='/aboutus'
                            size='small' 
                            text='Meet us'
                        />
                    </div>
                    <img className='imgLuke__articleAbout' src="../../imgs/team/luke.webp" alt="Luke Danes, owner of Luke's Diner" />
                </div>
            </article>
            
        </section>
        <section className="sectionHome__pattern section__reviews">
            <ImgReviewList type='firstRound' />
            <article className="article__reviews">
                <h2 className=' h1 text-turquoise__darker'>Share <br/> your <br/> burger <br/> tale</h2>
                <p className="h5">We always love to hear about how you find out your meal. Come on! Let’s create a great history together.</p>
            </article>
            <div>
                <Btn 
                    isLink={true} 
                    type='primary'
                    size='small'
                    text='Write a review'
                />
                <Btn 
                    isLink={true} 
                    type='secondary'
                    size='small'
                    text='See our reviews'
                />
            </div>
            <ImgReviewList type='secondRound' />
        </section>
        <section className="sectionHome__pattern section__community">
            <article className="article__community">
                <h2 className='h3 title__community'>Community Nourishment</h2>
                <p>Discover How Luke's Diner Serves More Than Just Delicious Meals</p>
                <Btn 
                    isLinkBtnStyle={true}
                    to='/sponsorship'
                    type='primary'
                    size='xsmall'
                    text='Know more'
                />
            </article>
        </section>
    </>
    
}