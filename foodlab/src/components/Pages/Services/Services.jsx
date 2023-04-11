import React from 'react';
import PageHeader from '../../Template/PageHeader';
import OverviewSection from './Overview Section/OverviewSection';
import ServicesOfferedSection from './Services Offered Section/ServicesOfferedSection';
import SpecialOffer from './Special Offer/SpecialOffer';

export default function Services() {
  return (
    <>
      <PageHeader textContent='Services' />
      <OverviewSection />
      <ServicesOfferedSection />
      <SpecialOffer />
    </>
  )
}
