import React, { useEffect, useState } from "react";
import MedicationSearch from "./MedicationSearch";
import MedicationTile from "./MedicationTile";

const MedicationIndexPage = (props) => {
  const [medications, setMedications] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("/api/v1/medications", {
      credentials: "same-origin",
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
        if (body.signInError) {
          setErrorMessage(body.signInError);
        } else {
          setMedications(body);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const deleteMedication = (medicationId) => {
    fetch(`/api/v1/medications/${medicationId}`, {
      credentials: "same-origin",
      method: "DELETE",
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
      .then((userMedications) => {
        setMedications(userMedications);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  let errorsDiv = null;

  if (errorMessage !== null) {
    errorsDiv = (
      <div className="grid-x align-center">
        <div className="callout alert cell shrink">{errorMessage}</div>
      </div>
    );
  }

  let medicationList = null;

  if (medications.length === 0 && errorMessage === null) {
    medicationList = <p>No medications yet!</p>;
  } else {
    medicationList = medications.map((medicationObject) => {
      return (
        <MedicationTile
          key={medicationObject.id}
          data={medicationObject}
          deleteMedication={deleteMedication}
        />
      );
    });
  }

  return (
    <div className="medication-index-container">
      <h3>My Medications</h3>
      <a className="button primary" href="/medications/new">
        Add a medication
      </a>
      <div className="grid-x grid-padding-x">
        <div className="cell large-4">
          {medicationList}
          {errorsDiv}
        </div>
        <div className="cell large-8">
          <MedicationSearch />
        </div>
      </div>
    </div>
  );
};

export default MedicationIndexPage;
