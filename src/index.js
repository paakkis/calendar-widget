import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

//ei getata roottia, koska tarkoituksena tehdä widget, jonka voi kiinnittää tiettyyn osaan sivua
ReactDOM.render(<App />, document.getElementById('calendar'))
