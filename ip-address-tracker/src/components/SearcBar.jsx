import React from 'react'

import searchBtn from '../assets/icon-arrow.svg';
import IpInformation from "./IpInformation";
const SearcBar = () => {
    return (
        <div className=" sm:w-full sm:h-auto sm:absolute sm:top-0 sm: py-10 sm:flex sm: flex-col sm:items-center sm:gap-8">
            <h1 className="text-White font-medium text-header">IP Address Tracker</h1>

            <form action="" className="sm:flex items-center sm:w-10/12">
                <input className="placeholder:text-md py-2 px-3 rounded-l-xl outline-none cursor-pointer h-12 w-full" type="text" placeholder='Search for any IP address or domain'></input>
                <button className="outline-none px-5 py-4 rounded-r-xl bg-VeryDarkGray cursor-pointer h-12" aria-label="search-ip"><img src={searchBtn} alt="" aria-hidden="true"></img></button>
            </form>

            <IpInformation />
        </div>
    )
}

export default SearcBar