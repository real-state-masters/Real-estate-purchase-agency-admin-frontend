import React from 'react'
import { GoMail } from 'react-icons/go'
import { concatAddress, uriMapbox } from '../../utils/constants'


import './EditCard.scss'

const EditCard = () => {

    const validateAddress = (e) => {
        e.preventDefault()
        const inputs = [...document.querySelectorAll('.form-container input')]
        const adressParams = {}

        console.log(inputs)
        inputs.forEach((input) => {
            adressParams[input.getAttribute('name')] = input.value;
        });

        console.log(adressParams)
        console.log(concatAddress(adressParams))

        getAddress(adressParams);
    }

    const getAddress = (adressParams) => {
        fetch(uriMapbox(concatAddress(adressParams))).then(res => res.json()).then(res => console.log(res))
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
                            <input type="text" id="" name="street" placeholder="street"></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Number
                            </label>
                            <input type="text" id="" name="number" placeholder="number"></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                City
                            </label>
                            <input type="text" id="" name="city" placeholder="city"></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                State
                            </label>
                            <input type="text" id="" name="state" placeholder="state"></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Country
                            </label>
                            <input type="text" id="" name="country" placeholder="country"></input>
                        </div>
                        <div>
                            <input onClick={validateAddress} type="submit" value="Search"></input>
                        </div>
                    </form>
                </div>
                <div className="map-container"></div>
            </div>
        </div>
    )
}

export default EditCard