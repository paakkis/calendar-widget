
import React, {useState,useEffect} from 'react'
import _ from 'lodash'
import Event from './Event'
import './EventMapper.scss'
import axios from 'axios'

export default function EventMapper(props) {
  const [forms, setForms] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3003/api/forms')
         .then((res) => {
          setForms(res.data)
        })
  },[])

  const getFormID = (id) => {
    //console.log(forms)
    const form = forms.find(form => form.eventID === id)
    const formid = form?.id
    console.log(formid)
    return formid
  }
  

  //dicti, jossa mäpätään kuukaudet ja kuun nimet
  const month_dict = {
    1: 'Tammikuu',
    2: 'Helmikuu',
    3: 'Maaliskuu',
    4: 'Huhtikuu',
    5: 'Toukokuu',
    6: 'Kesäkuu',
    7: 'Heinäkuu',
    8: 'Elokuu',
    9: 'Syyskuu',
    10: 'Lokakuu',
    11: 'Marraskuu',
    12: 'Joulukuu',
  }
  

  //group events by month
  const groupEvents = () => {
    const events = props.events.items.map((event) => {
      
      //ISO-stringi -> Date-objektiksi
      let date = new Date(event.start.dateTime)

      //palautetaan objekti, jolla kuukausi, vuosi ja lista tapahtumia
      return {
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        events: [event],
      }
    })
    //groupataan tapahtumat kuukausittain
    return _.groupBy(events, 'month')
  }
  const event_data = groupEvents()

  //tulostetaan tapahtumat kuukausittain
  const getEventsMonthly = (data, month) => {
    
    return (
      
      <div key={month} className="card-container">
          {data.map((element) => {
          let event = element.events[0]
          let attachments
          try{
            attachments = event.attachments[0].fileId
          } catch(err){
            console.log('ei löytynyt')
          }
          return (
            <div key={Event} className="event">
              <Event
                key={event.id}
                title={event.summary}
                desc={event.description}
                date={event.start.dateTime}
                endingDate={event.end.dateTime}
                location={event.location}
                url={event.htmlLink}
                attachment={attachments}
                formUrl = {`http://localhost:3002/${getFormID(event.id)}`}
                formid = {getFormID(event.id)}
              />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      {_.map(event_data, (data, month) => {
        return getEventsMonthly(data, month)
      })}
    </>
  )
}
