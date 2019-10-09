import React from 'react';
import LeffalippuApp from '../LeffalippuApp'

function Tickets(props) {

  return (



    { props.ticket.map(ticket => {
      return (
        <p key= { ticket.sarjanumero }>
        Nimi: { ticket.parastajalkeen }<br/>
        Email: { ticket.parastaennen }
        </p> )
      })
    }
  );
}

export default Tickets;
