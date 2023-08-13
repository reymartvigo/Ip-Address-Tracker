import React from 'react';

const IpInformation = ({ ipAddress, country, region, postalcode, timezone, isp }) => {
    return (
        <div className="rounded-xl bg-White sm:w-10/12 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:py-8 ">
            <div className="sm:flex sm:flex-col sm:items-center gap-2">
                <span className="text-DarkGray font-semibold text-sm tracking-widest">IP ADDRESS</span>
                <h2 className="text-VeryDarkGray font-medium text-xl">{ipAddress}</h2>
            </div>

            {country && region && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2">
                    <span className="text-DarkGray font-semibold text-sm tracking-widest">LOCATION</span>
                    <h2 className="text-VeryDarkGray font-medium text-xl">{region},{country} </h2>
                </div>
            )}
            {postalcode && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2">
                    <span className="text-DarkGray font-semibold text-sm tracking-widest">TIMEZONE</span>
                    <h2 className="text-VeryDarkGray font-medium text-xl">{postalcode}</h2>
                </div>
            )}

            {timezone && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2">
                    <span className="text-DarkGray font-semibold text-sm tracking-widest">TIMEZONE</span>
                    <h2 className="text-VeryDarkGray font-medium text-xl">{timezone}</h2>
                </div>
            )}



            {isp && (
                <div className="sm:flex sm:flex-col sm:items-center gap-2">
                    <span className="text-DarkGray font-semibold text-sm tracking-widest">ISP</span>
                    <h2 className="text-VeryDarkGray font-medium text-xl">{isp}</h2>
                </div>
            )}
        </div>
    );
};

export default IpInformation;
