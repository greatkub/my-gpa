

import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from 'react-select'




const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function Dropdownn(props) {


    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        // console.log(event.target.value);
        props.save(event.target.value)
    }

    return (
        <div style={{width: 200, height: 39}}>
            <Select
                // style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A' }}

                width='100px'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>

    );

}
export default Dropdownn;
