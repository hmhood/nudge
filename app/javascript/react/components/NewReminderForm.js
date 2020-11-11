import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewReminderForm = (props) => {
  const [formFields, setFormFields] = useState({
    time: "",
    medication: "",
    note: "",
  });

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");

  let errorsDiv = null;

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const postNewReminder = (event) => {
    event.preventDefault();
    fetch("/api/v1/reminders", {
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
    return <Redirect to="/reminders" />;
  }

  if (errors !== "") {
    errorsDiv = (
      <div className="grid-x align-center">
        <div className="callout alert cell shrink">{errors}</div>
      </div>
    );
  }

  return (
    <div className="grid-container text-center form">
      <h2> Create a New Reminder</h2>
      <form onSubmit={postNewReminder}>
        {errorsDiv}
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="Time">
            <h3>Time*:</h3>
          </label>
          <input
            className="cell small-4 field"
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
            value={formFields.time}
          />
        </div>
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="medication">
            <h3>Medication:</h3>
          </label>
          <input
            className="cell small-4 field"
            type="text"
            name="medication"
            id="medication"
            onChange={handleChange}
            value={formFields.medication}
          />
        </div>
        <div className="grid-x grid-margin-x align-middle">
          <label className="cell small-4 text-right" htmlFor="note">
            <h3>Notes:</h3>
          </label>
          <textarea
            className="cell small-4 text-area"
            name="note"
            id="note"
            onChange={handleChange}
            value={formFields.note}
          />
        </div>
        <div className="grid-x align-center">
          <input
            id="submit-reminder"
            className="cell shrink button"
            type="submit"
            value="Add Reminder"
          />
        </div>
      </form>
      <div>
        <p>* Please select hour. e.g. 8:00 AM, 4:00 PM</p>
      </div>
    </div>
  );
};

export default NewReminderForm;
