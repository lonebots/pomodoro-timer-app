import React, { createContext, useState } from 'react'

export const SettingContext = createContext()

export const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
        console.log(executing)
    }

    const settingsButton = () => {
        setExecuting({})
        setPomodoro(0)

    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short-break':
                setPomodoro(evaluate.short)
                break;
            case 'long-break':
                setPomodoro(evaluate.long)
                break
            default:
                setPomodoro(0)
                break;
        }

    }


    // decide the children
    const children = ({ remainingTime }) => {
        console.log("remaining time : ", remainingTime)
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        console.log("m : ", minutes, `${minutes} m : ${seconds} s`)
        return (
            <div className='time-panel'>
                {`${minutes} m : ${seconds} s`}
            </div>)
    }

    function setCurrentTimer(active_state) {
        setStartAnimate(false)
        setExecuting({
            ...executing,
            active: active_state
        })

        setTimerTime(executing)
    }

    return (
        <SettingContext.Provider
            value={{
                pomodoro,
                executing,
                startAnimate,
                startTimer,
                pauseTimer,
                stopTimer,
                updateExecute,
                setCurrentTimer,
                children,
                settingsButton
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

