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
    } 
    else if (props.location == 'Ilona'){
      return <h5 className="ilona">{props.location}</h5>
    }
    else if (props.location) {
      return <h5>{props.location}</h5>
    } 

    else {
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
  const attachment = () => {
    console.log(props.attachment)
    if (props.attachment) {
      return <img className="event_bg" src="https://drive.google.com/uc?export=view&id=1WNij9ZR-_aGdFtI52on4Ls7l0O-I61oz" alt=""></img>
    }
    else{
      return <img className="event_bg" src="https://www.pellicaanonline.com.au/wp-content/uploads/2020/12/44a.jpeg" alt=""></img>
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
      return <p>{sutkautuksia[Math.floor(Math.random() * sutkautuksia.length)]}</p>
    }
  }
  

  return (
    //EVENT SIGN PROPS URL TÄYTYY VAIHTAA VIELÄ ILMOITTAUTUMISLOMAKEEN LINKKIIN MYÖHEMMIN
    <div className="event_container">
      {attachment()}
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

