import React from 'react'
import { connect } from 'react-redux'
import InfoResults from '../InfoResults/InfoResults'
import PropsContainer from '../PropsContainer/PropsContainer'
import Filters from '../Filters/Filters';

const PropertiesContainer = ({ properties, showFilters }) => {

    return (
        <>
            <InfoResults properties={properties}  />
            {
                showFilters
                ? <Filters />
                : null
            }
                
            {
                properties.map(property => {
                    return <PropsContainer key={property.id} property={property} />;
                })
            }
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        properties: state.properties,
        showFilters: state.showFilters
    }
}

export default connect(mapStateToProps)(PropertiesContainer)