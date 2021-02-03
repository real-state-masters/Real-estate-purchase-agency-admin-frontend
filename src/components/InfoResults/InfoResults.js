import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { AiTwotoneFilter } from 'react-icons/ai'

import './InfoResults.scss';

const InfoResults = ( {properties} ) => {

    return (
        <div className="info-results-container">
            <div>
                <span>{properties.length} Results</span>
            </div>
            <div className="events-container">
                <div>
                    <BiPlus />
                    <span>Add New</span>
                </div>
                <div>
                    <AiTwotoneFilter />
                    <span>Filters</span>
                </div>
            </div>
        </div>
    )
}

export default InfoResults