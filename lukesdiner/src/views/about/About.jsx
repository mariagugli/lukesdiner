import { useState } from 'react';
import { TEAMMEMBERS } from '../../../public/team'
import Btn from '../../components/buttons/Btn';
import ExtraInfoMember from '../../components/extraInfoMember/ExtraInfoMember';
import Logo from '../../components/logo/Logo'
import './About.scss'
import PhilosophyTitle from '../../components/svgTitle/PhilosophyTitle';
import ImgReviewList from '../../components/imgReviewList/ImgReviewList';

export default function About() {

    const listMembers = TEAMMEMBERS;

    const [ showTeamCard, setShowTeamCard ] = useState(null);
    const handleShowTeamCard = (memberId) => {
        setShowTeamCard(memberId)
    }
    const handleHideTeamCard = () => {
        setShowTeamCard(null)
    }

    return <>
        <section className="sectionAbout__pattern section__history">
            <span className="cupsbg cupsbg--v1"></span>
            <article className="articleAbout__pattern article__history">
                <Logo name='logo-name' size='default'/>
                <p className='text-white'>Nestled in the heart of the charming Stars Hollow, Connecticut, Luke's Diner has been a beloved part of this tight-knit community for decades. Established by Luke Danes, our diner's story began when he transformed his father's hardware store into a warm and inviting haven for locals and visitors alike.</p>
            </article>
            <span className="cupsbg cupsbg--v2"></span>
        </section>
        <section className="sectionAbout__pattern section__team">
            <h1>Meet <br/> the team</h1>
            <ul className="list__members">
                {listMembers.map(member => (
                    <li className='item__member' key={member.id}>
                        <Btn 
                            type='memberTeam'
                            onClick={() => handleShowTeamCard(member.id)}
                            value={member.id}
                        >
                            <div className='img__itemMember'>
                                <img className='img__imgItem' src={member.img} alt={member.name} />
                            </div>
                            <div className='info__itemMember'>
                                <p className="h2 name__itemMember">Hey! I'm {member.name}</p>
                                <p>{member.description}</p>
                            </div>
                        </Btn>
                        {showTeamCard === member.id && (
                            <ExtraInfoMember
                                key={member.id}
                                name={member.id}
                                value={member.id}
                                btnOnClick={handleHideTeamCard}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </section>
        <section className="sectionAbout__pattern section__philosophy">
            <img className='img__philosophySection' src="../../imgs/peoplehangingout2.webp" alt="People hanging out, talking and eating pizza on a wood table." />
            <PhilosophyTitle color='turquoise__lighter' />
            <p className="text-white">Our philosophy is simple: We believe that great food should be enjoyed in a warm and friendly atmosphere. We take pride in serving wholesome, balanced, and delicious meals prepared with care, using the finest ingredients. From our freshly brewed coffee to our delightful baked goods, every item on our menu is a testament to our commitment to quality.</p>
        </section>
        <section className="sectionAbout__pattern section__commitment">
            <img className='img__commitmentSection' src="../../imgs/peoplehangingout.webp" alt="People hanging out, talking and eating pizza on a wood table." />
            <h2 className='title__sections'>Our Commitment</h2>
            <article className="articleAbout__pattern article__commitmentSection">
                <p >At Luke's Diner, we're more than just a place to enjoy a hearty meal. We're a cornerstone of the community, dedicated to supporting and nourishing both the body and soul of our beloved Stars Hollow. Our commitment goes beyond the kitchen, as we actively participate in local initiatives, sponsor community events, and strive to make a positive impact in the lives of our friends and neighbors.</p>
                <Btn 
                    isLinkBtnStyle={true}
                    to='/sponsorship'
                    type='primary'
                    size='xsmall'
                    text='See more'
                />
            </article>
        </section>
        <section className="sectionAbout__pattern section__contact">
            <ImgReviewList type='firstRound' />
            <article className="articleAbout__pattern article__contactSection">
                <h2 className="h1 title__sections">JOIN OUR <br/> JOURNEY</h2>
                <p className="h5">We invite you to be a part of our journey, whether you're a local regular or a visitor passing through. Explore our menu, discover our commitment to the community, and savor the unique atmosphere that makes Luke's Diner a cherished part of Stars Hollow's history. We're more than a diner; we're a home away from home</p>
                <p className="h5">Thank you for choosing Luke's Diner, where every cup of coffee and every meal is served with a side of community spirit and a dash of love.</p>
                <Btn
                    isLinkBtnStyle={true}
                    to='/contact'
                    type='primary'
                    size='small'
                    text='Contact us' 
                />
            </article>
            <ImgReviewList type='secondRound' />
        </section>
    </>
}