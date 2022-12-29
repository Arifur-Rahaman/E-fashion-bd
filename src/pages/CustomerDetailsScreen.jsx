import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Store } from '../Store'
import Error from '../components/Error'
import { FaRegEdit } from "react-icons/fa";
function CustomerDetailsScreen() {
    const { customerId } = useParams()
    const [editMode, setEditMode] = useState(false)
    const { state: ctxState } = useContext(Store)
    const { customers } = ctxState.customer
    const customer = customers.find(c => c._id === customerId)
    const { firstName, lastName, email, mobile, profession, dateOfBirth, createdAt } = customer || {}

    const [CustomerData, setCustomerData] = useState({
        firstName,
        lastName,
        email,
        mobile,
        dateOfBirth,
        profession,
    })

    const handleSubmit = (e) => {
        console.log('Submit')
        e.preventDefault()
    }
    const handleInputChange = (e) => {
        setCustomerData((pre)=>({...pre, [e.target.name]:e.target.value}))
    }

    if (!customer) {
        return <div className='container mx-auto'>
            <h1 className='text-lg md:text-3xl font-medium pl-4'>
                Customer <br /> {customerId}
            </h1>
            <Error
                error='Customer not found'
                info='Go to customer list'
                route='/customerList'
            />
        </div>
    }
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-3xl font-medium mb-2'>
                Customer <br /> {customerId}
            </h1>
            <div className='mb-8 flex gap-x-8'>
                <p className='font-semibold bg-orange-200 px-2 py-1 rounded-lg'>
                    Created At {createdAt?.slice(0, 10)}
                </p>
                <button title='Edit' onClick={() => setEditMode((pre) => !pre)}>
                    <FaRegEdit color='#ea580c' size={22} />
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'>
                    <div>
                        <span className='font-semibold'>First Name: </span>
                        <>
                            {
                                !editMode ? (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <p className='p-3 font-semibold'>{firstName}</p>
                                    </div>
                                ) : (<div className="border border-gray-400 rounded-lg flex mb-4 ">
                                    <input
                                        onChange={handleInputChange}
                                        name='firstName'
                                        required
                                        type="text"
                                        value={CustomerData.firstName}
                                        placeholder="Yor First Name"
                                        className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                    />
                                </div>)


                            }
                        </>

                    </div>
                    <div>
                        <span className='font-semibold'>Last Name: </span>
                        <>
                            {
                                !editMode ? (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <p className='p-3 font-semibold'>{lastName}</p>
                                    </div>
                                ) : (<div className="border border-gray-400 rounded-lg flex mb-4 ">
                                    <input
                                        onChange={handleInputChange}
                                        name='lastName'
                                        required
                                        type="text"
                                        value={CustomerData.lastName}
                                        placeholder="Your Last Name"
                                        className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                    />
                                </div>)
                            }
                        </>
                    </div>
                    <div>
                        <span className='font-semibold'>Email: </span>
                        <>
                            {
                                !editMode ? (<div className="border border-gray-400 rounded-lg flex mb-4 ">
                                    <p className='p-3 font-semibold'>{email}</p>
                                </div>) : (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <input
                                            onChange={handleInputChange}
                                            name='email'
                                            required
                                            type="email"
                                            value={CustomerData.email}
                                            placeholder="Email"
                                            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                        />
                                    </div>
                                )
                            }
                        </>
                    </div>
                    <div>
                        <span className='font-semibold'>Mobile: </span>
                        <>
                            {
                                !editMode ? (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <p className='p-3 font-semibold'>{mobile}</p>
                                    </div>
                                ) : (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <input
                                            onChange={handleInputChange}
                                            name='mobile'
                                            required
                                            type="text"
                                            value={CustomerData.mobile}
                                            placeholder="Mobile"
                                            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                        />
                                    </div>
                                )
                            }
                        </>
                    </div>
                    <div>
                        <span className='font-semibold'>Profession:</span>
                        <>
                            {
                                !editMode ? (<div className="border border-gray-400 rounded-lg flex mb-4 ">
                                    <p className='p-3 font-semibold'>{profession}</p>
                                </div>) : (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <input
                                            onChange={handleInputChange}
                                            name='profession'
                                            required
                                            type="text"
                                            value={CustomerData.profession}
                                            placeholder="Profession"
                                            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                        />
                                    </div>
                                )
                            }
                        </>
                    </div>
                    <div>
                        <span className='font-semibold'>Date of birth: </span>
                        <>
                            {
                                !editMode ? (<div className="border border-gray-400 rounded-lg flex mb-4 ">
                                    <p className='p-3 font-semibold'>{dateOfBirth}</p>
                                </div>) : (
                                    <div className="border border-gray-400 rounded-lg flex mb-4 ">
                                        <input
                                            onChange={handleInputChange}
                                            name='dateOfBirth'
                                            required
                                            type="date"
                                            value={CustomerData.dateOfBirth}
                                            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
                                        />
                                    </div>
                                )
                            }
                        </>
                    </div>
                </div>

                <>
                    {
                        editMode && (
                            <div className='pl-2'>
                                <button
                                    className='btn btn-primary btn-sm mr-4'
                                >
                                    Update
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-warning btn-sm'
                                    onClick={() => { setEditMode(false) }}
                                >
                                    Cancel
                                </button>
                            </div>
                        )
                    }
                </>
            </form>
        </div>
    )
}

export default CustomerDetailsScreen