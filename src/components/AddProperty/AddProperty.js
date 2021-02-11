import React from 'react'
import { MoreFilters, 
        HomeFilters, 
        ConditionFilters, 
        BedroomFilters, 
        BathroomFilters, 
        PublicationDateFilter, 
        EquipmentFilter } from '../Filters/FilterTypes'

const AddProperty = () => {
    return (
        <>
            <HomeFilters />
            <ConditionFilters />
        </>
    )
}

export default AddProperty