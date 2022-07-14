import React from 'react';
import './Spinner.css';
import SpinnerGif from '../../images/loading-buffering.gif';

function Spinner(props) {
  return (
    <div>
        <div className='spinner-container'>
            <img style={{width:props.width? props.width : '80px'}} src={SpinnerGif} alt='' />
        </div>
    </div>
  )
}

export default Spinner