import React from 'react'
import { connect } from 'react-redux'
import { BiPlus } from 'react-icons/bi'
import { AiTwotoneFilter } from 'react-icons/ai'

import './InfoResults.scss';

const InfoResults = ( {properties, addFilters, hideFilters, showFilters} ) => {

    const ShowFilters = () => {
        addFilters(!showFilters)
    }

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
                <div onClick={ShowFilters}>
                    <AiTwotoneFilter />
                    <span>Filters</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showFilters: state.showFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilters: value => {
            dispatch({
                type: 'ADD_FILTERS',
                payload: value
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InfoResults)