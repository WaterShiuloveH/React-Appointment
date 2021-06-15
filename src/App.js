import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appoints, setAppoints] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContacts = (name, phone, email) => {
    setContacts([...contacts, { name: name, phone: phone, email: email }]);
  };

  const addAppoints = (title, contact, date, time) => {
    setAppoints([
      ...appoints,
      { title: title, contact: contact, date: date, time: time },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>

            <ContactsPage contacts={contacts} addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              contacts={contacts}
              appoints={appoints}
              addAppoints={addAppoints}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
