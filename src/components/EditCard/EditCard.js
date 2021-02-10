import React from 'react'
import { GoMail } from 'react-icons/go'

import './EditCard.scss'

const EditCard = () => {
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
                            <input type="text" id="" name="" value=""></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Number
                            </label>
                            <input type="text" id="" name="" value=""></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                City
                            </label>
                            <input type="text" id="" name="" value=""></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                State
                            </label>
                            <input type="text" id="" name="" value=""></input>
                        </div>
                        <div>
                            <label for="">
                                <GoMail />
                                Country
                            </label>
                            <input type="text" id="" name="" value=""></input>
                        </div>
                        <div>
                            <input type="submit" value="Search"></input>
                        </div>
                    </form>
                </div>
                <div className="map-container"></div>
            </div>
        </div>
    )
}

export default EditCard