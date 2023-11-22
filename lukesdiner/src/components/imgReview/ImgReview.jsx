import './ImgReview.scss'

export default function ImgReview(props) {

    return <img
        className={props.className ? `imgReview ${props.className}` : 'imgReview'}
        src={props.img}
        alt={props.name}
    />
}