import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../Store'

function NavBar() {
  const [open, setOpen] = useState(false)
  const dorpdownRef = useRef()
  const { state } = useContext(Store)
  const navigate = useNavigate()
  const { cart: { carts } } = state

  useEffect(() => {
    let handler = (e) => {
      if (!dorpdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  const handleDropdownClick = () => {
    setOpen((current) => !current)
  }
  const show = 'dropdown-menu absolute absoulate z-50 text-gray-700 pt-1'
  const hide = 'dropdown-menu absolute hidden z-50 text-gray-700 pt-1'
  return (
    <div className='shadow w-full mb-15 fixed left-0 top-0 z-10 bg-[#fff]'>
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to={'/'} className="text-2xl text-primary font-bold">E-fashion-bd</Link>
        </div>
        <div className="flex-none">
          <div className="mr-4">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => navigate('/carts')}
            >
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#ea580c"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item bg-[#ea580c] text-white">{carts.length}</span>
              </div>
            </button>
          </div>
          {/* ***Dropdown Start*** */}
          <div className="dropdown border inline-block relative" ref={dorpdownRef}>
            <button
              className="text-primary font-semibold py-2 px-4 rounded inline-flex items-center"
              onClick={handleDropdownClick}
            >
              <span className="mr-1">Admin</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul className={open ? show : hide}>
              <li
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                onClick={() => { setOpen(false); navigate('/orderList') }}
              >
                Orders
              </li>
              <li
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                onClick={() => { setOpen(false); navigate('/productList') }}
              >Products
              </li>
              <li
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                onClick={() => { setOpen(false); navigate('/customerList') }}
              >
                Customers
              </li>
            </ul>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default NavBar