import React from 'react'
import cx from 'clsx'

import styles from './select.module.css'

const Select = ({options, onBlur}) => {
    return(
        <select onBlur={onBlur} className={cx(styles.select)}>
            {
                options &&
                options.map((option, idx) => {
                    return(
                        <option key={idx}>{option}</option>
                    )
                })
            }
        </select>
    )
}

export { Select }