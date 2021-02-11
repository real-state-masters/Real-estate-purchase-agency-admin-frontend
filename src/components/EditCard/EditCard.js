import React from 'react'
import { GoMail } from 'react-icons/go'
import { concatAddress, uriMapbox } from '../../utils/constants'


import './EditCard.scss'

const EditCard = () => {

    const [location, setLocation] = React.useState({})
    const [nextStep, setNextStep] = React.useState(false)

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
                <div className="form-container">
                    <form>
                        <div>
                            <label for="">
                                <GoMail />
                                Street
                            </label>
                            <input type="text" id="" name="street" placeholder="street"/>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Number
                            </label>
                            <input type="text" id="" name="number" placeholder="number"/>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                City
                            </label>
                            <input type="text" id="" name="city" placeholder="city"/>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                State
                            </label>
                            <input type="text" id="" name="state" placeholder="state"/>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Country
                            </label>
                            <input type="text" id="" name="country" placeholder="country"/>
                        </div>
                        <div>
                            <input onClick={validateAddress} type="submit" value="Search"/>
                            {
                                nextStep && <button>Next Step</button> 
                            }
                        </div>
                    </form>
                </div>
                <div className="map-container"></div>
            </div>
        </div>
    )
}

export default EditCard