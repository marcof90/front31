import React, { Fragment, useState, useRef, useEffect } from 'react'
import ContactList from './ContactList'
import { v4 as uuid } from 'uuid'

export function ContactsApp(){
    const [contacts, setContacts] = useState([
    ])

    const nameRef = useRef()

    useEffect(()=>{
        const storedContacts = JSON.parse(localStorage.getItem('contacts'))
        if(storedContacts){
            setContacts(storedContacts)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(contacts))
    },[contacts])

    const checkContact = (id) => {
        const newContacts = [...contacts]
        const contact = newContacts.find(contact => contact.id === id)
        contact.isSelected = !contact.isSelected
        setContacts(newContacts)
    }

    const addContact = ()=>{
        const name = nameRef.current.value
        if(name === '') return
        setContacts((prevContacts)=>{
            return [...prevContacts, {id: uuid(), name: name, isSelected:false}]
        })
        nameRef.current.value = null
    }

    const deleteContact = ()=>{
        const unselectedContacts = contacts.filter((contact) => !contact.isSelected)
        setContacts(unselectedContacts)
    }

    return (
        <Fragment>
            <div>Hola Tripulantes</div>
            <ContactList contacts={contacts} checkContact={checkContact}/>
            <input ref={nameRef} type="text" placeholder="Nuevo Contacto" />
            <button onClick={addContact} >🙋‍♀️</button>
            <button onClick={deleteContact}>🙅‍♀️</button>
            <div>💁‍♀️ {contacts.filter((contact)=>contact.isSelected).length} contactos seleccionados</div>
        </Fragment>
    )
}