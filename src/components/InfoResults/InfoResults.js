import React from 'react'
import { connect } from 'react-redux'
import { BiPlus } from 'react-icons/bi'
import { AiTwotoneFilter } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'

import './InfoResults.scss';

const InfoResults = ( {properties, addFilters, addEditCard, showFilters, showEdit } ) => {

    const ShowFilters = () => {
        addFilters(!showFilters)
    }

    const showEditCard = () => {
        addEditCard(!showEdit)
    }

    return (
        <div className="info-results-container">
            <div>
                <span>{properties.length} Results</span>
            </div>
            <div className="events-container">
                <div onClick={showEditCard}>
                    <FiEdit2 />
                    <span>Edit</span>
                </div>
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
        showFilters: state.dashboard.showFilters,
        showEdit: state.dashboard.showEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilters: value => {
            dispatch({
                type: 'ADD_FILTERS',
                payload: value
            })
        },

        addEditCard: value => {
            dispatch({
                type: 'ADD_EDIT_CARD',
                payload: value
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InfoResults)