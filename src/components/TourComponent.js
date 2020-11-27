import React, { useState } from 'react';

export const TourComponent = ({ tours, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <React.Fragment>
            {
                tours.map(tour => (
                    <div key={tour.id} className="bg-white w-full rounded-sm overflow-hidden shadow-xl mt-8">
                        <img src={tour.image} className="w-full object-cover h-56 md:h-80" alt="city" /> 
                        <div className="my-3 p-6">
                            <div className="flex justify-between mb-6">
                                <h3 className="font-bold text-xs md:text-sm tracking-wider">{tour.name}</h3>
                                <h3 className="text-blue-500 bg-blue-100 font-semibold py-1 px-2 text-xs md:text-sm self-center md:self-stretch">${tour.price}</h3>
                            </div>
                            <p className="text-xs md:text-sm text-gray-500">{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}  <span className="cursor-pointer text-blue-500 text-md font-semibold" onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</span></p>
                            <div onClick={() => removeTour(tour.id)} className="mx-auto w-10/12 mb-2 mt-6 md:w-5/12 text-center text-red-700 border border-red-700 rounded py-1 text-sm md:text-md font-semibold cursor-pointer">
                                Not Interested
                            </div>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
