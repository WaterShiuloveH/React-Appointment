import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    contacts.find((contact) =>
      contact.name === name ? setDuplicate(true) : setDuplicate(false)
    );
  }, [name, contacts, duplicate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      addContacts(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>{duplicate ? "This contact has been added!" : "Add Contact"}</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
