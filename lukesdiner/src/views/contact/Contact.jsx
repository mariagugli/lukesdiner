import { FAQs } from '../../../public/faq'
import Btn from '../../components/buttons/Btn'
import Icon from '../../components/icons/Icons'
import Input from '../../components/inputs/Input'
import ItemFAQ from '../../components/itemFAQ/ItemFAQ'
import Select from '../../components/select/Select'
import './Contact.scss'

export default function Contact() {

    const listFAQs = FAQs;

    return <>
        <section className="sectionContact__pattern sectionForm__contact margin-bottom__lv10">
            <p>Have questions or want to get involved in our community efforts? We'd love to hear from you.</p>
            <h1>Contact us</h1>
            <article className="articleForm__pattern article__basicInfo">
                <div className="basicInfo">
                    <Icon name='phone' size='xsmall'/>
                    <p>860-0000000</p>
                </div>
                <div className="basicInfo">
                    <Icon name='map-marker' size='xsmall'/>
                    <p>Starts Hollow, Connecticut</p>
                </div>
            </article>
            <form action="contact" className='contactForm'>
                <Select
                    type='secondary'
                    size='default'
                />
                <Input 
                    type='secondary'
                    placeholder='Name'
                    idInput='input__name'
                />
                <Input 
                    type='secondary'
                    placeholder='Email'
                    idInput='input__email'
                />
                <Input 
                    type='secondary'
                    placeholder='Phone number'
                    idInput='input__phone'
                />
                <Input 
                    type='secondary'
                    inputtype='textarea'
                    placeholder='Message'
                    idInput='input__message'
                />
                <Btn 
                    type='primary'
                    text='Submit'
                />
            </form>
        </section>
        <section className="sectionContact__pattern sectionForm__FAQs">
            <h2 className='title__sections text-align--center'>FAQs</h2>
            <ul className="list__itemFAQ">
                {listFAQs.map(faq => (
                    <ItemFAQ 
                        key={faq.id}
                        to={faq.link}
                        for={faq.title}
                        img={faq.img}
                        altimg={faq.title}
                        question={faq.question}
                    />
                ))}
            </ul>
        </section>
    </>
}