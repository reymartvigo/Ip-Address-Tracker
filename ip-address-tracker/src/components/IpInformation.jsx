import React from 'react';

const IpInformation = ({ ipAddress, country, region, postalcode, timezone, isp }) => {
    return (
        <div className="rounded-xl bg-White sm:w-10/12 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:py-8 lg:flex-row lg: justify-between  lg:py-10 lg:-mt-4 lg2:mt-0 xl:w-8/12 xl:items-start">
            <div className="sm:flex sm:flex-col sm:items-center gap-2 lg:items-start lg:px-4 lg2:px-8">
                <span className="text-DarkGray font-semibold sm:text-sm tracking-widest ">IP ADDRESS</span>
                <h2 className="text-VeryDarkGray font-medium sm:text-xl xl:text-header">{ipAddress}</h2>
            </div>

            {country && region && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2 lg:items-start  lg:border-l-2  lg:border-r-2 border-DarkGray lg:px-4 lg2:px-8">
                    <span className="text-DarkGray font-semibold sm:text-sm tracking-widest" >LOCATION</span>
                    <h2 className="text-VeryDarkGray font-medium sm:text-xl xl:text-header">{region},{country} </h2>
                </div>
            )}


            {timezone && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2 lg:items-start   border-DarkGray lg:px-4  lg2:px-6  xl:h-full">
                    <span className="text-DarkGray font-semibold sm:text-sm tracking-widest">TIMEZONE</span>
                    <h2 className="text-VeryDarkGray font-medium sm:text-xl xl:text-header">UTC{timezone}</h2>
                </div>
            )}



            {isp && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2 lg:border-l-2 lg:px-4 border-DarkGray lg2:px-8 lg:items-start">
                    <span className="text-DarkGray font-semibold text-sm tracking-widest">ISP</span>
                    <h2 className="text-VeryDarkGray font-medium text-xl xl:text-header">{isp}</h2>
                </div>
            )}
        </div>
    );
};

export default IpInformation;
