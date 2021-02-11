import React from 'react';
import Header from '../components/Header/Header'
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer'


const DashboardPage = () => {

    return (
        <div>
            <Header></Header>
            <main>
                <PropertiesContainer />
            </main>
        </div>
    )
}

export default DashboardPage