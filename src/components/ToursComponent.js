import React from 'react'
import { TourComponent } from './TourComponent'

export const ToursComponent = ({ tours, removeTour }) => {
    return (
        <React.Fragment>
            <div className="mx-auto w-10/12 max-w-xl my-24">
                <h2 className="text-2xl md:text-4xl text-center tracking-wider font-bold text-gray-800">Our Tours</h2>
                <div className="flex justify-center">
                    <div className="h-1 w-16 md:w-24 bg-blue-400 my-3"></div>
                </div>
                <div className="my-12 w-1/1">
                    <TourComponent tours={tours} removeTour={removeTour} />
                </div>
            </div>
        </React.Fragment>
    )
}
