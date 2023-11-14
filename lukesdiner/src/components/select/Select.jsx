import { useState } from 'react';
import './Select.scss';
import Icon from '../icons/Icons';

export default function Select(props) {

    const [selectedValue, setSelectedValue] = useState('title-intro');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return <div className={`select ${props.className} select-${props.type} select-${props.size}`}>
        <select
            className={`selector ${props.classSelector}`}
            name={props.name}
            id={props.id}
            value={selectedValue} 
            onChange={handleSelectChange}
        >
            <option value="01" >Option 1</option>
            <option value="title-intro" >Select an option</option>
            {props.children}
        </select>
        <Icon 
            name='arrow-down' 
            size='small'
            className={`iconSelector ${props.classIcon}`}
        />
    </div>
}
