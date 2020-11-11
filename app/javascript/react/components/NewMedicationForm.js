import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewMedicationForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    dosage: "",
    directions: "",
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const postNewMedication = (event) => {
    event.preventDefault();
    fetch("/api/v1/medications", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(formFields),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.errors) {
          setErrors(body.errors);
        } else {
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to="/medications" />;
  }

  let errorsDiv = null;

  if (errors !== "") {
    errorsDiv = (
      <div className="grid-x align-center">
        <div className="callout alert cell shrink">{errors}</div>
      </div>
    );
  }

  return (
    <div className="grid-container text-center form">
      <h2>Add a Medication</h2>
      <form onSubmit={postNewMedication}>
        {errorsDiv}
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="Name">
            <h3>Name:</h3>
          </label>
          <input
            className="cell small-4 field"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formFields.name}
          />
        </div>
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="dosage">
            <h3>Dosage:</h3>
          </label>
          <input
            className="cell small-4 field"
            type="text"
            name="dosage"
            id="dosage"
            onChange={handleChange}
            value={formFields.dosage}
          />
        </div>
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="directions">
            <h3>Directions:</h3>
          </label>
          <textarea
            className="cell small-4 text-area"
            name="directions"
            id="directions"
            onChange={handleChange}
            value={formFields.directions}
          />
        </div>
        <div className="grid-x align-center">
          <input
            id="submit-reminder"
            className="cell shrink button"
            type="submit"
            value="Add Medication"
          />
        </div>
      </form>
    </div>
  );
};

export default NewMedicationForm;
