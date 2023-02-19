import React, { useEffect, useState } from 'react';
import './Block.css'

const Block = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <>
           
            
            key={props.index}
    onMouseOver={() => setHoveredIndex(props.index)}
    onMouseOut={() => setHoveredIndex(null)}
    style={{
      backgroundColor: hoveredIndex === props.index ? "transparent" : props.col,
      border: `2px solid ${hoveredIndex === props.index ? props.col : props.col}`,
      color:hoveredIndex===props.index? "black":"white"
    }}
            
           < >
                <div className='text'>{props.name} </div>
                <div className='discription'>{props.agee}</div>

                <div className='btnContainer'><button className='btn'>Button</button></div>

            </>
        </>
    );
}
export default Block;