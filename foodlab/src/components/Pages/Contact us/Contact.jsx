import React from 'react';
import PageHeader from '../../Template/PageHeader';
import ContactDetails from './Contact Details/ContactDetails';
import Map from './Map/Map';

export default function Contact() {
  return (
    <>
      <PageHeader textContent='Contact Us' />
      <ContactDetails />
      <Map />
    </>
  )
}
