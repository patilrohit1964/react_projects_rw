import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { UseContextData } from '../context/ContextApi';

const UserTable = () => {
    const { ReadData, Users, DeleteData, getDocumetsUsingId } = useContext(UseContextData);
    useEffect(() => {
        ReadData();
    }, [])
    return (
        <div>
            <h1 className='text-center pt-3'>Users</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((el, index) => (
                        <tr key={el.id}>
                            <td>{index + 1}</td>
                            <td>{el.data().name}</td>
                            <td>{el.data().last}</td>
                            <td>{el.data().city}</td>
                            <td>{el.data().state}</td>
                            <td>{el.data().zip}</td>
                            <td className='d-flex justify-content-around'>
                                <button onClick={() => getDocumetsUsingId(el.id)} className='btn btn-primary'>Update</button>
                                <button onClick={() => DeleteData(el.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable