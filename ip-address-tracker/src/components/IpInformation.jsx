import React from 'react'

const IpInformation = () => {
    return (
        <div className="rounded-xl bg-White sm:w-10/12 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:py-8">
            <div className="sm:flex sm:flex-col sm:items-center gap-2">
                <span className="text-DarkGray font-semibold text-sm tracking-widest">IP ADDRESS</span>
                <h2 className="text-VeryDarkGray font-medium text-xl">192.212.174.101</h2>
            </div>
            <div className="sm:flex sm:flex-col sm:items-center gap-2">
                <span className="text-DarkGray font-semibold text-sm tracking-widest">LOCATION</span>
                <h2 className="text-VeryDarkGray font-medium text-xl">Brooklyn, NY 10001</h2>
            </div>

            <div className="sm:flex sm:flex-col sm:items-center gap-2">
                <span className="text-DarkGray font-semibold text-sm tracking-widest">TIMEZONE</span>
                <h2 className="text-VeryDarkGray font-medium text-xl">UTC-05:00</h2>
            </div>

            <div className="sm:flex sm:flex-col sm:items-center gap-2">
                <span className="text-DarkGray font-semibold text-sm tracking-widest">ISP</span>
                <h2 className="text-VeryDarkGray font-medium text-xl">SpaceX Starlink</h2>
            </div>


        </div>
    )
}

export default IpInformation