import React from 'react';

const Contact = () => {
  return (
  <form action="/">
    <label htmlFor="first-name">First Name</label>
    <input required pattern="^[A-Za-z]{3,28}$" placeholder="e.g John" name="first-name" id="first-name" type="text"/>
    <label htmlFor="last-name">Last Name</label>
    <input required pattern="^[A-Za-z]{3,28}$" placeholder="e.g Smith" name="last-name" type="text"/>
    <label htmlFor="email">Email</label>
    <input required placeholder="e.g john@smith.net" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" id="email" type="text"/>
    <label htmlFor="message">Message</label>
    <input required pattern="^{3,450}$" rows="8" cols="40" name="message" id="message" type="textarea"/>
    <button type="submit">Submit Form</button>
  </form>
  );
}

export default Contact
