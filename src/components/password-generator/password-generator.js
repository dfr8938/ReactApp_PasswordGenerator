import React from 'react'

import styles from './password-generator.module.css'

import { Input } from '../../ui/input'
import { Select } from '../../ui/select'
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";

const PasswordGenerator = () => {

    let chars = '0123456789'
    chars += 'abcdefghijklmnopqrstvuxyzw'
    chars += 'ABCDEFGHIJKLMNOPQRSTVUXYZW'

    const symbols = '!@#$%^&()_+?><:{}[]'

    const passwordLengthValues = [
        12, 13, 14, 15, 16
    ]

    const [result, setResult] = React.useState('')
    const [passwordLength, setPasswordLength] = React.useState(passwordLengthValues[0])
    const [isSymbolUsed, setIsSymbolUsed] = React.useState(false)
    const [isPasswordCopied, setIsPasswordCopied] = React.useState(false)

    const handlePasswordGenerator = () => {
        let currentResult = ''

        if(isSymbolUsed) {
            chars += symbols
        }

        for (let i = 0; i < passwordLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            currentResult += chars.substring(randomNumber, randomNumber + 1)
        }
        setResult(currentResult)
    }

    const handleSymbolUsed = () => {
        setIsSymbolUsed(!isSymbolUsed)
    }

    const handleBlur = (event) => {
        setPasswordLength(event.target.value)
    }

    const handlePasswordCopy = () => {
        if(result) {
            let timerId = null
            navigator.clipboard.writeText(result).then(() => {
                setIsPasswordCopied(true)
                timerId = setTimeout(() => {
                    setIsPasswordCopied(false)
                    setResult('')
                    clearTimeout(timerId)
                }, 2000)
            })
        }
    }

    return(
        <div className={styles.root}>
            <h1 className={styles.title}>
                Password generator
            </h1>
            <div className={styles.result}>
                <Input type="text" readonly={true} defaultValue={result}/>
                <div className={styles.copy} onClick={handlePasswordCopy}>
                    <i className="fas fa-copy fa-2x"/>
                </div>
                {isPasswordCopied && <span className={styles.copied}>Copied!</span>}
            </div>
            <div className={styles.option}>
                <span className={styles['option-name']}>Length password</span>
                <Select options={passwordLengthValues} onBlur={handleBlur}/>
            </div>
            <div className={styles.option}>
                <label className={styles['option-label']} htmlFor="symbols">
                    Special characters
                </label>
                <Checkbox defaultChecked={false} id="symbols" onChange={handleSymbolUsed}/>
            </div>
            <Button type="button" onClick={handlePasswordGenerator}>Password</Button>
        </div>
    )
}

export { PasswordGenerator }