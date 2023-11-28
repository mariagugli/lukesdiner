import { useRef } from 'react';
import { ACTIVITIES } from '../../../public/sponsorship-activities'
import Btn from '../../components/buttons/Btn'
import Product from '../../components/product/Product';
import './Sponsorship.scss'

export default function Sponsorship() {

    const listActivities = ACTIVITIES;

    const activitiesList = useRef();

    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
    };

    return <>
        <section className="sectionSponsor__pattern section__introSponsor">
            <article className="articleSponsor__pattern article__introSponsor">
                <p className='h2 title__sections'>New activities </p>
                <Btn
                    type='primary'
                    size='small'
                    text='See all'
                    onClick={() => scrollDown(activitiesList)}
                />
            </article>
        </section>
        <section className="sectionSponsor__pattern section__activitiesSponsor text-turquoise__lighter">
            <article className="articleSponsor__pattern article__activitiesSponsor">
                <h1 className="title__section title__activitiesSponsor">Community Engagement</h1>
                <p>At Luke's Diner, our commitment to our hometown, Stars Hollow, Connecticut, goes beyond just serving delicious meals. We take pride in actively engaging with our community, supporting local initiatives, and making a difference in the lives of our fellow residents. Here's a glimpse of what we've been up to:</p>
                <ul className="activitiesList" ref={activitiesList}>
                    {listActivities.map(activity => (
                        <Product
                            key={activity.id}
                            img={activity.img}
                            altimg={activity.title}
                            name={activity.title}
                            price={activity.description}
                            className='activity'
                            imgClass='img__activity'
                            btnsClass='display--none'
                        />
                    ))}
                </ul>
            </article>
            <article className="articleSponsor__pattern article__joinSponsor">
                <p>At Luke's Diner, we're dedicated to nurturing the heart and soul of our community. Our promise is to continue supporting and contributing to the well-being of Stars Hollow. Together, we'll keep our community thriving, and we invite you to join us on this journey.</p>
                <div className="invitation__joinSponsor">
                    <h2 className="h2 text-yellow title__sections">Do you want to join?</h2>
                    <p>Want to be a part of our community initiatives? Have ideas or suggestions for how we can make Stars Hollow even better? We'd love to hear from you. Contact us to get involved and share your thoughts.</p>
                    <p>Thank you for being a part of our community, and for choosing Luke's Diner as your place for good food, great company, and community spirit.</p>
                    <Btn
                        isLinkBtnStyle={true}
                        to='/contact'
                        type='secondary'
                        size='small'
                        text='Contact us'
                    />
                </div>
            </article>
        </section>
    </>
    
}