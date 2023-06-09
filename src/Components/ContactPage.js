import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';


function ContactPage() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [contactDetails, setContactDetails] = useState({
        firstName: "",
        lastName: "",
        status: ""
    })
    const [editing, setEditing] = useState({
        edit: false,
        index: 0
    })

    const addContact = (e) => {
        e.preventDefault();
        console.log(contactDetails);
        if (editing.edit) {
            contacts.splice(editing.index, 1, contactDetails)
        } else {
            contacts.push(contactDetails);
        }
        setContactDetails({
            firstName: "",
            lastName: "",
            status: ""
        })
        setShowForm(false);
    }
    const editContact = (i) => {
        setEditing({
            edit: true,
            index: i
        });
        setContactDetails(contacts[i]);
        setShowForm(true);
    }

    const deleteContact = (i) => {
        let contact = contacts.filter((data) => contacts.indexOf(data) !== i);
        setContacts(contact);
    }
    return (
        <div className='contactPage'>
            <button className='btn-contact' onClick={() => setShowForm(!showForm)}>Create Contact</button>

            {showForm ? (
                <div className='createContact'>
                    <h3>Create Contact Screen</h3>
                    <form className='inputForm' onSubmit={addContact}>
                        <div className='nameInput'>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" name="firstName" id="firstName"
                                value={contactDetails.firstName}
                                onChange={(e) => setContactDetails({ ...contactDetails, firstName: e.target.value })}
                            />
                        </div>
                        <div className='nameInput'>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName"
                                value={contactDetails.lastName}
                                onChange={(e) => setContactDetails({ ...contactDetails, lastName: e.target.value })}
                            />
                        </div>
                        <div className='statusInput'>
                            <label htmlFor="status">Status:</label>
                            <span>
                                <input type="radio" name="active" id="active"
                                    onChange={(e) => setContactDetails({ ...contactDetails, status: e.target.name })}
                                    checked={contactDetails.status === "active" ? true : false}
                                />
                                <label htmlFor="active">Active</label>
                                <input type="radio" name="inactive" id="inactive"
                                    onChange={(e) => setContactDetails({ ...contactDetails, status: e.target.name })}
                                    checked={contactDetails.status === "inactive" ? true : false}
                                />
                                <label htmlFor="inactive">Inactive</label>
                            </span>
                        </div>
                        <button type="submit" className='btn-save'>Save Contact</button>
                    </form>
                </div>
            ) : (
                <div className='contactData'>
                    {contacts.length ? (
                        <div id='contactData'>
                            {contacts.map((data, i) => {
                                return <div key={i} className='personsContact'>
                                    <div>
                                        <span>{data.firstName}</span>
                                        <span style={{ marginLeft: "10px" }}>{data.lastName}</span>
                                    </div>
                                    <div className='btns'>
                                        <button onClick={() => { editContact(i) }}>Edit</button>
                                        <button onClick={() => deleteContact(i)} style={{ marginLeft: "5px", backgroundColor: "rgb(242, 94, 94)" }}>Delete</button>
                                    </div>
                                </div>
                            })}
                        </div>
                    ) : (
                        <div className='noContact'>
                            <span><MdCancel id='noContact' /></span>
                            <span style={{ textAlign: "left", marginLeft: "10px" }}>
                                No contacts found <br /> Please add contacts using <br /> Create Contacts button
                            </span>
                        </div>
                    )}
                </div>
            )
            }
        </div>
    )
}

export default ContactPage