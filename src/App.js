import { useContext, useEffect } from 'react';
import Button from './Components/Button';
import CountDownAnimation from './Components/CountDownAnimation';
import SetPomodoro from './Components/SetPomodoro';
import { SettingContext } from './context/SettingsContext';

function App() {
  const { pomodoro,
    executing,
    setCurrentTimer,
    settingsButton,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingContext)


  useEffect(() => { updateExecute(executing) }, [executing, startAnimate, updateExecute])
  return (
    <div className='container-wrapper'>
      <div className='header' >
        <h1>Pomodoro Timer 🍅 </h1>
        <small>Be productive the right way.</small>

      </div>

      {pomodoro === 0 ?
        <main className='container'>
          <SetPomodoro />
        </main> :

        <main className='container'>
          <ul className='labels'>
            <li>
              <Button
                title="Work"
                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('work')}

              />
            </li>

            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === 'short-break' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('short-break')}

              />
            </li><li>
              <Button
                title="Long Break"
                activeClass={executing.active === 'long-break' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('long-break')}

              />
            </li>
          </ul>
          <Button title="Settings" _callback={settingsButton} />
          <div className='time-container'>
            <div className='time-wrapper'>
              <CountDownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}>
                {children}
              </CountDownAnimation>
            </div>
          </div>
          <div className='button-swapper' >
            <Button title="Start" className={!startAnimate ? 'active' : undefined} _callback={startTimer} />
            <Button title="Pause" className={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
          </div>
        </main>}


    </div>
  );
}

export default App;
