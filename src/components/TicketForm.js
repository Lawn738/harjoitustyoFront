import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

function TicketForm() {
  const [ticket, setValues] = useState ({
    sarjanumero: '',
    parastajalkeen: '',
    parastaennen: '',
  });

  const change = (e) => {
    setValues({
      ...ticket, [e.target.name]: e.target.values
    });
  };

  const add = (e) => {
    setValues({
      sarjanumero: '',
      parastajalkeen: '',
      parastaennen: '',
    });
  };

  return (
    <form>
      <label htmlfor="sarjanumero">Sarjanumero</label>
      <input type="text" name="otsikko" values={ticket.sarjanumero} onChange={ (e) => change(e) }/> <br />

      <label htmlfor="parastajalkeen">parastajalkeen</label>
      <input type="text" name="paikka" values={ticket.parastajalkeen} onChange={ (e) => change(e) }/> <br />

      <label htmlfor="parastaennen">parastaennen</label>
      <input type="text" name="paiva" values={ticket.parastaennen} onChange={ (e) => change(e) }/> <br />

      <input type="submit" value="lisää" onClick={ (e) => add(e)}/>
    </form>
  );
}

export default TicketForm;
