import React from 'react';
import PageHeader from '../../Template/PageHeader';
import MenuOptionsSection from './Menu Options  Section/MenuOptionsSection';
import OurCompanySection from './Our Company Section/OurCompanySection';

export default function About() {
  return (
    <>
      <PageHeader textContent='About Us' />
      <MenuOptionsSection />
      <OurCompanySection />
    </>
  )
}
