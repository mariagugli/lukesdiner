import { IMGREVIEWS } from '../../../public/imgs-reviews'
import ImgReview from '../imgReview/ImgReview'
import './ImgReviewList.scss'

export default function ImgReviewList(props) {

    const listImgReview = IMGREVIEWS

    const sectionFistUp = listImgReview.filter(section => {
        return section.section === "lineup-firstround"
    });
    const sectionFistDown = listImgReview.filter(section => {
        return section.section === "linedown-firstround"
    });
    const sectionSecondUp = listImgReview.filter(section => {
        return section.section === "lineup-secondround"
    });
    const sectionSecondDown = listImgReview.filter(section => {
        return section.section === "linedown-secondround"
    });

    return <>
            {props.type === 'firstRound' ?
                <div className={props.className ? `imgReviews ${props.className}` : 'imgReviews'}>
                    <div className={props.lineupClass ? `line__imgReviews ${props.lineupClass}` : 'line__imgReviews'}>
                        {sectionFistUp.map(img => (
                            <ImgReview
                                name={img.name}
                                img={img.img}
                                key={img.id}
                            />
                        ))}
                    </div>
                    <div className={props.linedownClass ? `line__imgReviews ${props.linedownClass}` : 'line__imgReviews'} >
                        {sectionFistDown.map(img => (
                            <ImgReview
                                name={img.name}
                                img={img.img}
                                key={img.id}
                            />
                        ))}
                    </div>
                </div>
            : 
                <div className={props.className ? `imgReviews ${props.className}` : 'imgReviews'}>
                    <div className={props.lineupClass ? `line__imgReviews ${props.lineupClass}` : 'line__imgReviews'} >
                        {sectionSecondUp.map(img => (
                            <ImgReview
                                name={img.name}
                                img={img.img}
                                key={img.id}
                            />
                        ))}
                    </div>
                    <div className={props.linedownClass ? `line__imgReviews ${props.linedownClass}` : 'line__imgReviews'} >
                        {sectionSecondDown.map(img => (
                            <ImgReview
                                name={img.name}
                                img={img.img}
                                key={img.id}
                            />
                        ))}
                    </div>
                </div>
            }
    </>
}