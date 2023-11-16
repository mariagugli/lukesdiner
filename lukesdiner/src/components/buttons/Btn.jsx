import { Link } from 'react-router-dom';
import './Btn.scss';
import Icon from '../icons/Icons';

export default function Btn(props) {
    return <>
        {props.isLink === true ?
            <Link 
                to={props.to} 
                target={props.target ? props.target : '_self'} 
                className={`linkbtn linkbtn-${props.type} ${props.size ? `linkbtn-${props.size}` : "linkbtn-default" }`}>

                <div className="text__linkbtn">
                    {props.text ? props.text : ''}
                    <span className='line__linkbtn'></span>
                </div>
                <Icon name={props.icon ? props.icon : ''} />
                {props.children}

            </Link>
        : props.isLinkBtnStyle === true ?

            <Link 
                to={props.to} 
                target={props.target ? props.target : '_self'} 
                className={`btn ${props.type ? `btn-${props.type}` : "btn-primary" } ${props.size ? `btn-${props.size}` : "btn-default" } ${props.className}`} 
                >

                {props.icon ? props.icon : ''}
                {props.text ? props.text : ''}
                {props.children}

            </Link>

        :
            <button 
                value={props.value}
                onClick={props.onClick}
                className={`btn btn-${props.type} ${props.size ? `btn-${props.size}` : "btn-default" } ${props.className}`} 
                type="button" 
                disabled={props.status === 'disable' ? true : false}>

                {props.icon ? props.icon : ''}
                {props.text ? props.text : ''}
                {props.children}

            </button>
        }
    </>
}