import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { AiTwotoneDelete } from "react-icons/ai";
import '../../../assets/styles/dashboard-page.css';

export default function DashboardPage() {

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
  };

  return (
    <section className='dashboard-page'>
      <Container>
        <Row className='w-100 m-0'>
          <Col>
            <Form.Select size="lg" onChange={handleSelect}>
              <option>Select the data</option>
              <option>Orders</option>
              <option>Table Reservation</option>
              <option>Messages</option>
            </Form.Select>

            <Table className='mt-5 bg-light' bordered hover>
              <thead>
                <tr className='text-center'>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <AiTwotoneDelete className='fs-1 text-danger w-100' role={'button'} />
                </tr>
                <tr className='text-center'>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <AiTwotoneDelete className='fs-1 text-danger w-100' role={'button'} />
                </tr>
                <tr className='text-center'>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <AiTwotoneDelete className='fs-1 text-danger w-100' role={'button'} />
                </tr>
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </section >
  );
}
