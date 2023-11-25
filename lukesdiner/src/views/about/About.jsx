import { useState } from 'react';
import { TEAMMEMBERS } from '../../../public/team'
import Btn from '../../components/buttons/Btn';
import ExtraInfoMember from '../../components/extraInfoMember/ExtraInfoMember';
import Logo from '../../components/logo/Logo'
import './About.scss'

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
            <article className="article__history">
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
    </>
}