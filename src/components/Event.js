import React from 'react'
import Moment from 'react-moment'
import ReactHtml from 'html-react-parser'
import 'moment/locale/fi'
import './Event.scss'

export default function Event(props) {

  const sutkautuksia = [
    'Onpa täällä tyhjää :-)',
    'Mitäpä tähän nyt selittämään :-)'
  ]


  const location = () => {
    if (props.location && props.location.split(',').length > 1) {
      return <h5>{props.location.split(',')[0]}</h5>
    } else if (props.location) {
      return <h5>{props.location}</h5>
    } else {
      return null
    }
  }

  const date = () => {
    // dddd[na] -> tiistaina
    if (props.date) {
      return (
        <Moment element="h5" format=" [Klo] HH:mm, DD.MM.YYYY" locale="fi">
          {props.date}
        </Moment>
      )
    }
  }

  const day = () => {
    if (props.date) {
      return (
        <Moment element="h5" format=" dddd[na]" locale="fi">
          {props.date}
        </Moment>
      )
    }
  }

  /*
  const duration = () => {
    return (
      <Moment element="span" diff={props.date} unit="hours">
        {props.endingDate}
      </Moment>
    )
  }*/

  const description = () => {
    if (props.desc) {
      return <p>{ReactHtml(props.desc.replace(/\n/g, '<br />'))}</p>
    } else {
      return <em>{sutkautuksia[Math.floor(Math.random() * sutkautuksia.length)]}</em>
    }
  }

  return (
    
      <div className="event_container">
        <div className="event_bg"></div>
        <div className="event_info">
          <div className="event_title">
            <h4>{props.title}</h4>
          </div>

          <div className="event_location">
            <span className="day">{day()}</span>
            <span className="date">{date()}</span>
            <span className="location">{location()}</span>
            {/*
            <span className="duration">
              <h5>~ {duration()} h</h5>
            </span>
            */}
          </div>

          <div className="event_desc">
            {description()}
          </div>

          <div className="event_footer">
            <div className="event_more">
              <a href={props.url} className="btn_more">
                Kalenteriin
              </a>
            </div>
            <div className="event_sign">
              <a href={props.url} className="btn_sign">
                Ilmoittaudu
              </a>
            </div>
          </div>
        </div>
      </div>
    
  )
}
