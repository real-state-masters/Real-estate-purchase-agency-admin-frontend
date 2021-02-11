import React from 'react'
import { concatAddress, uriMapbox } from '../../utils/constants'
import FormEdit from '../FormEdit/FormEdit'
import AddProperty from '../AddProperty/AddProperty'


import './EditCard.scss'

const EditCard = () => {
    const [nextStep, setNextStep] = React.useState(false)
    const [location, setLocation] = React.useState({})
    const [step, NextStep] = React.useState(0)

    const validateAddress = (e) => {
        e.preventDefault()
        const inputs = [...document.querySelectorAll('.form-container input')]
        const adressParams = {}

        console.log(inputs)
        inputs.forEach((input) => {
            adressParams[input.getAttribute('name')] = input.value;
        });

        getAddress(adressParams);
    }

    const getAddress = async (adressParams) => {
        let address = concatAddress(adressParams)
        let result = await fetch(uriMapbox(address))

        if(!result.ok) {
            return {status: "failed"}
        }

        result = await result.json()

        console.log(result)

        let location = {
            "id": result.features[0].id,
            "coordinates": result.features[0].geometry.coordinates,
            "address": address,
            "context": result.features[1].context[0],
            "property_id": result.features[0].id
        }

        setLocation(location)

        setNextStep(true)
    }

    return (
        <div className="edit-card-container">
            <h1>Edit Property</h1>
            <div>
                {
                    step === 0 ? <FormEdit validateAddress={validateAddress}/> : <AddProperty />
                }
                
            </div>

            {
                nextStep && <button>Next Step</button> 
            }
        </div>
    )
}

export default EditCard