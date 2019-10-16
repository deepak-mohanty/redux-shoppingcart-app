import React from 'react';

const ProgressBar = (props) => {
    const progressBarWidthStyle = { width: props.scroll }
    return(
        <div className="progressBar" style={progressBarWidthStyle}></div>
    )
}

export default ProgressBar;