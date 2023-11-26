import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import "./style.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "John",
      phone_number: "+46 444 44 44",
    },
    {
      fullname: "Max",
      phone_number: "+47 222 22 22",
    },
    {
      fullname: "Niki",
      phone_number: "+48 333 33 33",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
};

export default Contacts;
