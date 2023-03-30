import React from 'react'

const Button = ({ title, activeClass, _callback }) => {
    return (
        <div className='button-container'>
            <button className={activeClass} onClick={_callback}>
                {title}
            </button>
        </div>
    )
}

export default Button