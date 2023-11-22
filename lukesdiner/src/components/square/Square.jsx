import './Square.scss'

export default function Square(props) {
    return <svg 
        viewBox="0 0 50 50" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.size ? `square-${props.size}` : 'square-default'}
    >
        <path d="M0.508423 50C0.508423 50 22.1214 48.5262 31.6106 48.5262C41.0998 48.5262 49.1056 50 49.1056 50C49.1056 50 50.3553 33.2969 49.1056 25.4367C47.8559 17.5764 49.1056 0.873363 49.1056 0.873363C49.1056 0.873363 35.2902 -1.0917 23.3491 0.873363C11.408 2.83843 0.508423 0.873363 0.508423 0.873363V50Z" fill={props.color}/>
    </svg>
}