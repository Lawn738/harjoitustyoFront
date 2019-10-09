import React from 'react';
import DrawerMUI from './navigation/DrawerMUI'
import Homepage from './components/Homepage'

const tick = [
{ id: 1,
  sarjanumero: '123456789',
  parastajalkeen: '26.5.2020',
  parastaennen: '26.5.2020',
  },
{ id: 2,
  sarjanumero: '123456789',
  parastajalkeen: '26.5.2020',
  parastaennen: '26.5.2020',
  },
{ id: 3,
  sarjanumero: '123456789',
  parastajalkeen: '26.5.2020',
  parastaennen: '26.5.2020',
  },
];

function LeffalippuApp() {
  return (



    <div>

      <Tickets ticket={ tick } />

      <DrawerMUI/>
    </div>
  );
}

export default LeffalippuApp;
