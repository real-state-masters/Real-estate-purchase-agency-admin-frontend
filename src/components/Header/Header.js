import React, { useState } from 'react'
import { connect } from 'react-redux'
import {GiMagnifyingGlass} from 'react-icons/gi';
import {BsFillBellFill} from 'react-icons/bs';
import {RiArrowDropDownFill} from 'react-icons/ri';
import {RiDashboardFill} from 'react-icons/ri';
import {BsHouseDoor} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiGlasses} from 'react-icons/bi';

import './Header.scss'

const Header = ({addProperties}) => {
    const [keyword, setKeyword] = useState('')


    const properties = [
        {
            "id": 2342,
            "location": [
                {
                "id": 124234234,
                "coordinates": [
                    234234.23,
                    141234.23
                ],
                "address": "my street 23",
                "context": {},
                "property_id": 3
                }
      ],
      "type": "duplex",
      "area": 232,
      "status": "sold",
      "sold_at": "yesterday",
      "bought_by": "3423423",
      "created_at": "two days ago",
      "updated_at": "23423423",
      "price": 99999993,
      "images": [],
      "description": "asfasdfsfd",
      "num_bathrooms": 2,
      "num_rooms": 3,
      "pets": true,
      "fully_fitted_kitchen": true,
      "furnished": true,
      "condition": 0,
      "contact": 32423422,
      "title": "The best one"
    },
    {
      "id": 2343,
      "location": [
        {
          "id": 124234235,
          "coordinates": [
            234234.23,
            141234.23
          ],
          "address": "my street 23",
          "context": {},
          "property_id": 3
        }
      ],
      "type": "home",
      "area": 232,
      "status": "sold",
      "sold_at": "yesterday",
      "bought_by": "3423423",
      "created_at": "two days ago",
      "updated_at": "23423423",
      "price": 99999993,
      "images": [],
      "description": "asfasdfsfd",
      "num_bathrooms": 2,
      "num_rooms": 3,
      "pets": true,
      "fully_fitted_kitchen": true,
      "furnished": true,
      "condition": 0,
      "contact": 32423422,
      "title": "The best one"
    }
   ]

    const handleSubmit = event => {
        event.preventDefault()
        console.log(keyword)
        addProperties(properties)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return(
        <div className="header-container">
            <div>
                <div className="sidenav">
                    <div>
                        <BiGlasses />
                        <RiDashboardFill />
                        <BsHouseDoor />
                        <FiSettings />
                    </div>
                </div>
                </div>
                    <form className="search-container" onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" value={keyword} name="searchBox" placeholder="Search"/>
                        <GiMagnifyingGlass />
                    </form>
                    <div className="login-issues-container">
                        <div className="notification-icon-container">
                            <BsFillBellFill />
                            <span>6</span>
                        </div>
                        <div className="photo-login-container">
                            <figure>
                                <img src="" alt=""/>
                            </figure>
                        </div>
                        <div>
                            <span>Mary J</span>
                            <RiArrowDropDownFill />
                        </div>
                    </div>
                </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addProperties: value => (
            dispatch({
            type: 'ADD_PROPERTIES',
            payload: {properties: value}
        }))
    })
}

export default connect(null, mapDispatchToProps)(Header)