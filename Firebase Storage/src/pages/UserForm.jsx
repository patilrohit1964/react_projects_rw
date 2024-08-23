import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { UseContextData } from '../context/ContextApi';
const UserForm = () => {


    const { AddData, UpdateData, formtoggle, SetformData, formData } = useContext(UseContextData);

    function handleChange(e) {
        SetformData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className='text-center'>
                {formtoggle ? <h2>Insert User Data</h2> : <h2>Update User Data</h2>}
            </div>
            {formtoggle ?
                <Form className='w-25 border border-danger form-style' onSubmit={(e) => AddData(e, formData)}>
                    <Row className="mb-3 m-auto">
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                value={formData.name}
                                placeholder="First name"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='last'
                                value={formData.last}
                                placeholder="Last name"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3 m-auto">
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" value={formData.city} name='city' onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" value={formData.state} name='state' required onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" value={formData.zip} name='zip' onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button type="submit" className='m-auto d-block'>Submit form</Button>
                </Form>
                :
                <Form className='w-25 border border-danger form-style' onSubmit={(e) => UpdateData(e, formData)}>
                    <Row className="mb-3 m-auto">
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                value={formData.name}
                                placeholder="First name"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='last'
                                value={formData.last}
                                placeholder="Last name"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3 m-auto">
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" value={formData.city} name='city' onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" value={formData.state} name='state' required onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" value={formData.zip} name='zip' onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button type="submit" className='m-auto d-block'>Update Data</Button>
                </Form>
            }
        </div>
    )
}

export default UserForm