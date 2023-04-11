import React from 'react';
import PageHeader from '../../Template/PageHeader';
import OverviewSection from './Overview Section/OverviewSection';
import ServicesOfferedSection from './Services Offered Section/ServicesOfferedSection';

export default function Services() {
  return (
    <>
      <PageHeader textContent='Services' />
      <OverviewSection />
      <ServicesOfferedSection />
    </>
  )
}
