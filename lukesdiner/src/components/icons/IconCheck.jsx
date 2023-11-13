import './Icon.scss';
import { ICONMAP } from './Icons';

export default function IconCheck(props) {
    return <svg 
        className={
            ` icon 
            ${props.className !== undefined ? props.className : ''} 
            ${props.size ? `icon-${props.size}` : 'icon-default'}`
        } 
        viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {ICONMAP['check']}
    </svg>
}