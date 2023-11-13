import Icon from '../icons/Icons';
import './Input.scss';

export default function Input(props) {
    return <>
        <div className={ `${
            props.inputtype === 'checkbox' ? 
                `checkbox input-${props.type ? props.type : 'primary'} input-${props.size ? props.size : 'default'}`
            : props.inputtype === 'radio' ?
                `radio input-${props.type ? props.type : 'primary'} input-${props.size ? props.size : 'default'}`
            : 
                `input-${props.type ? props.type : 'primary'} input-${props.size ? props.size : 'default'}`}`}
            >

            <label className={props.labelclass ? `label ${props.labelclass}`: 'label'}>{props.label !== undefined ? props.label : ''}</label>
            <input 
                className={`${
                    props.inputtype === 'checkbox' ? 
                        props.inputclass ? `input-checkbox ${props.inputclass}` : "input-checkbox"
                    : props.inputtype === 'radio' ?
                        props.inputclass ? `input-radio ${props.inputclass}` : "input-radio"
                    : 
                        props.inputclass !== undefined ? `${props.inputclass}` : "input"
                    }`}
                type={props.inputtype !== undefined ? props.inputtype : "text"}
                name={props.inputName ? props.inputName : ''}
                onChange={props.onChange}
                value={props.inputvalue}
                placeholder={props.placeholder !== undefined ? props.placeholder : ''}
                required
                >
            </input>
        </div>
    </>
}