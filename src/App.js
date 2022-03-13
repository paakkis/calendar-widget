<<<<<<< HEAD
import React from 'react'
import './App.css'
import EventMapper from './components/EventMapper'
import { useFetch } from './hooks/useFetch'

function App() {
  const [events, loading] = useFetch('https://skripti.org/calendarApi')

  return (
    <div className="App">
      {loading ? (
        <em>Ladataan :-)</em>
      ) : (
        <div>
          <EventMapper events={events} />
          <div className="App-info">
            <a
              className="App-link"
              href="https://github.com/skriptiry/calendar-widget"
            >
              tapahtumakalenteri v. 0.2
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
=======
import React from 'react'
import './App.css'
import EventMapper from './components/EventMapper'
import { useFetch } from './hooks/useFetch'

function App() {
  const [events, loading] = useFetch('https://skripti.org/calendarApi')

  return (
    <div className="App">
      {loading ? (
        <em>Ladataan :-)</em>
      ) : (
        <div>
          <EventMapper events={events} />
          <div className="App-info">
            <a
              className="App-link"
              href="https://github.com/skriptiry/calendar-widget"
            >
              tapahtumakalenteri v. 0.2
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
>>>>>>> f1820db1b55bc0ae1ae79f1c7492e85bbc1a92c4
