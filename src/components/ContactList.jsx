import React from 'react'
import Contact from './Contact'
import './styles/contact.css'

export default function ContactList({contacts, checkContact}) {
    return (
        <ul className="contact-list">
            {contacts.map((contact)=>(
                    // <li key={contact.id} >{contact.name}</li>
                <Contact key={contact.id} contact={contact} checkContact={checkContact} />
            ))}
        </ul>
    )
}
