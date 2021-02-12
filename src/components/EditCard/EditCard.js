import React from "react";
import { concatAddress, uriMapbox } from "../../utils/constants";
import FormEdit from "../FormEdit/FormEdit";
import AddProperty from "../AddProperty/AddProperty";
import { Modal, Button } from "react-bootstrap";
import message from "../../utils/message";

import { connect } from "react-redux";

const EditCard = (email) => {
  console.log(email);
  const [nextStep, setNextStep] = React.useState(false);
  const [location, setLocation] = React.useState({});
  const [step, setStep] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);

  React.useEffect(() => {
    if (!step) setDummyAddress();
  }, [step]);

  const validateAddress = (e) => {
    e.preventDefault();
    const inputs = [...document.querySelectorAll(".form-container input")];

    const adressParams = {};
    inputs.forEach((input) => {
      adressParams[input.getAttribute("name")] = input.value;
    });

    getAddress(adressParams);
  };

  const validateProperties = (e) => {
    const newProperty = {};
    const selects = [...document.querySelectorAll(".addContainer select")]; // type house, equipment, condition, //roms, //bathroms
    selects.forEach((select) => {
      newProperty[select.getAttribute("name")] = select.checked;
    });

    newProperty["description"] = document.querySelector(
      ".addContainer textarea"
    );
    newProperty["email"] = document.getElementsByName("email")[0];
    newProperty["area"] = document.getElementsByName("area")[0];
    newProperty["price"] = document.getElementsByName("price")[0];
    newProperty["title"] = document.getElementsByName("title")[0];
    newProperty["building_use"] = -1;

    const image = document.getElementsByClassName("image")[0];
    if (image) newProperty["image"] = image.files[0];

    console.log(newProperty)
  };

  const getAddress = async (adressParams) => {
    let address = concatAddress(adressParams);
    let result = await fetch(uriMapbox(address));

    if (!result.ok) message("address not found", 400);
    result = await result.json();
    let location = saveLocation(result, address);
    setLocation(location);
    setNextStep(true);
    message("address successfully entered", 200);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 0 ? (
            <FormEdit
              validateAddress={validateAddress}
              style={{ display: "flex" }}
            />
          ) : (
            <AddProperty />
          )}
        </Modal.Body>
        <Modal.Footer>
          {nextStep && (
            <Button
              onClick={() => {
                if (step === 0) {
                  setNextStep(true);
                  setStep(1);
                } else {
                  setStep(2);
                  validateProperties();
                }
              }}
            >
              Next Step
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const saveLocation = (result, address) => {
  return {
    id: result.features[0].id,
    coordinates: result.features[0].geometry.coordinates,
    address: address,
    context: result.features[1].context[0],
    property_id: result.features[0].id,
  };
};

const setDummyAddress = () => {
  document.getElementsByName("street")[0].value = "calle aragon";
  document.getElementsByName("number")[0].value = "50";
  document.getElementsByName("city")[0].value = "Barcelona";
  document.getElementsByName("state")[0].value = "Cataluña";
  document.getElementsByName("country")[0].value = "España";
};

const mapStateToProps = (state) => {
  return {
    email: state.dashboard.email,
  };
};
export default connect(mapStateToProps)(EditCard);
