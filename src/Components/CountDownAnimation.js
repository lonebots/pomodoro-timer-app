import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'

const CountDownAnimation = ({ key, timer, animate, children }) => {

    const { stopTimer } = useContext(SettingContext)
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={['#484f9b']}
            strokeWidth={7}
            size={220}
            trailColor="#FFFFFF"
            onComplete={() => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountDownAnimation