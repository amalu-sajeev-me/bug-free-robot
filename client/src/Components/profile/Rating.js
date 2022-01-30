import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

function Rating() {
const starts = Array(5).fill(0);
const [currentValue, setCurrentValue] = useState(0);
const [hoverValue, setHoverValue] = useState(undefined);

const handleClick = value => {
    setCurrentValue(value);
}
const handleMouseOver = value => {
    setHoverValue(value);
}
const handleMouseLeave = () => {
    setHoverValue(undefined)
}
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

  return (
    <div className='ST-colors'>
        {starts.map((_, index) => {
            return (
                <FaStar 
                key={index}
                size={24}
                style={{
                    marginRight: 10,
                    cursor: "pointer"
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                />
            )
        })}
        
    </div>
    );
}

export default Rating;
