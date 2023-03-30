import React, { useContext, useState } from 'react'
import { SettingContext } from '../context/SettingsContext'
import Button from './Button'

const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        work: 0,
        short: 0,
        long: 0,
        active: "work"
    })

    // context
    const { updateExecute } = useContext(SettingContext)

    // change handling 
    const handleChange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'short-break':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'long-break':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className='form-container'>
            <form noValidate>
                <div className='input-wrapper'>
                    <input value={newTimer.work} type="number" className="input" name="work" onChange={handleChange} />
                    <input value={newTimer.short} type="number" className="input" name="short-break" onChange={handleChange} />
                    <input value={newTimer.long} type="number" className="input" name="long-break" onChange={handleChange} />
                </div>
                <Button title="Set Timer" _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro