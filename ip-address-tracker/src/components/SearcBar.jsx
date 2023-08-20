import React from 'react'
import { useState } from 'react'
import searchBtn from '../assets/icon-arrow.svg';

const SearcBar = ({ findIpAddress }) => {

    const [ipAddress, setIpAddress] = useState('')
    const handleIpAddress = (event) => {
        event.preventDefault()
        findIpAddress(ipAddress)
    }

    return (
        <div className=" sm:w-full sm:h-auto  sm: py-10 sm:flex sm: flex-col sm:items-center sm:gap-8 xl:w-1/2">
            <h1 className="text-White font-medium text-header">IP Address Tracker</h1>

            <form action="" className="sm:flex items-center sm:w-10/12" onSubmit={handleIpAddress}>
                <input className="placeholder:text-md py-2 px-3 rounded-l-xl outline-none cursor-pointer h-12 w-full "
                    type="text"
                    name="ipAddress"
                    placeholder='Search for any IP address or domain'
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                ></input>
                <button className="outline-none px-5 py-4 rounded-r-xl bg-VeryDarkGray cursor-pointer h-12 hover:bg-DarkGray" aria-label="search-ip"><img src={searchBtn} alt="" aria-hidden="true"></img></button>
            </form>


        </div>
    )
}

export default SearcBar