import React from 'react';
import Slider from './Slider/Slider';
import CulinaryExperiencesSection from './Culinary Experiences Section/CulinaryExperiencesSection';
import OurSpecialties from './Our Specialties/OurSpecialties';
import BestServices from './Best Services/BestServices';
import MenuSection from './Menu/MenuSection';
import TableReservationSection from './Table Reservation Section/TableReservationSection';

export default function Home() {
  return (
    <>
      <Slider />
      <CulinaryExperiencesSection />
      <OurSpecialties />
      <BestServices />
      <MenuSection />
      <TableReservationSection />
    </>
  )
}
