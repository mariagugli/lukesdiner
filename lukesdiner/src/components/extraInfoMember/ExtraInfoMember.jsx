import { TEAMMEMBERS } from '../../../public/team'
import Btn from '../buttons/Btn';
import Icon from '../icons/Icons';
import './ExtraInfoMember.scss'

export default function ExtraInfoMember(props) {

    const listMembers = TEAMMEMBERS;

    const luke = listMembers.filter(member => {
        return member.id === "luke"
    });
    const josh = listMembers.filter(member => {
        return member.id === "josh"
    });
    const mitch = listMembers.filter(member => {
        return member.id === "mitch"
    });
    const jess = listMembers.filter(member => {
        return member.id === "jess"
    });
    const leah = listMembers.filter(member => {
        return member.id === "leah"
    });
    const lane = listMembers.filter(member => {
        return member.id === "lane"
    });
    const anthony = listMembers.filter(member => {
        return member.id === "anthony"
    });

    return <div  value={props.value} className={props.className ? `extraInfo__memberCard ${props.className}` : 'extraInfo__memberCard'}>
        <div className="section__memberCard">
            <Btn 
                type='close' 
                onClick={props.btnOnClick}
                className={props.btnClass ? `btnClose__memberCard ${btnClass}` : 'btnClose__memberCard'}
            >
                <Icon name='cross' />
            </Btn>
        </div>
        <div className="section__memberCard">
            <div className="title__memberCard">
                <p className="h2 question__titleMemberCard">What meal I would be?</p>
                <p className="h4">Luke’s Menu</p>
            </div>
            {props.name === 'luke' ? 
                <div>
                    {luke.map(luke => (
                        <p key={luke.id}>{luke.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'josh' ?
                <div>
                    {josh.map(josh => (
                        <p key={josh.id}>{josh.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'mitch' ?
                <div>
                    {mitch.map(mitch => (
                        <p key={mitch.id}>{mitch.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'jess' ?
                <div>
                    {jess.map(jess => (
                        <p key={jess.id}>{jess.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'leah' ?
                <div>
                    {leah.map(leah => (
                        <p key={leah.id}>{leah.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'lane' ?
                <div>
                    {lane.map(lane => (
                        <p key={lane.id}>{lane.extraInfo}</p>
                    ))}
                </div>
            : props.name === 'anthony' ?
                <div>
                    {anthony.map(anthony => (
                        <p key={anthony.id}>{anthony.extraInfo}</p>
                    ))}
                </div>
            : ''}
        </div>
    </div>
}