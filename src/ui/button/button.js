import React from 'react'
import cx from 'clsx'

import styles from './button.module.css'

const Button = ({ type, className, onClick, children }) => {

    return (
        <button type={ type }
            className={ cx(styles['button'], className) }
            onClick={ onClick }>

            { children }

        </button>
    )
}

export { Button }