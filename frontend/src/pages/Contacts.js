import { useEffect, useState } from "react";
import API from "../api/api";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");

  // fetching contacts
  const fetchContacts = async () => {
    const res = await API.get("/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // adding contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/contacts", {
      name,
      email,
      group,
    });

    setName("");
    setEmail("");
    setGroup("");

    fetchContacts();
  };

  return (
    <div className="contacts-container">
      <h3> Contacts</h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          placeholder="Group (e.g. Candidates)"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          required
        />
        <br />

        <button type="submit">Add Contact</button>
      </form>

      <div className="saved-contact-container">
        <h4>Saved Contacts</h4>
        <ul>
            {contacts.map((c) => (
            <li key={c._id} className="saved-contact-list">
                <p>Name: {c.name}</p>
                <p>Email: {c.email}</p>
                <p>Group: <em>{c.group}</em></p>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
