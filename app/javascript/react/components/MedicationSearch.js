import React, { useState } from "react";

const MedicationSearch = (props) => {
  const [searchField, setSearchField] = useState({
    medication: "",
  });

  const [searchResults, setSearchResults] = useState({});

  const handleChange = (event) => {
    setSearchField({
      ...searchField,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  let resultsDiv = null;
  if (searchResults.error) {
    resultsDiv = <div>{searchResults.error}</div>;
  }
  if (searchResults.dosage_info) {
    resultsDiv = (
      <div className="callout text-left">
        <p>
          <b>Generic Name:</b> {searchResults.generic_name}
        </p>
        <p>
          <b>Dosage Information:</b> {searchResults.dosage_info}
        </p>
      </div>
    );
  }

  const getInfo = (event) => {
    event.preventDefault();
    fetch(`/api/v1/medications/search?query=${searchField.medication}`, {
      credentials: "same-origin",
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
        setSearchResults(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className="grid-container text-center search-div">
      <h2>Get information about a medication</h2>
      <form onSubmit={getInfo}>
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
            value={searchField.medication}
            placeholder="e.g. advil"
          />
        </div>
        <div className="grid-x align-center">
          <input
            id="submit-search"
            className="cell shrink button primary"
            type="submit"
            value="Search"
          />
        </div>
      </form>
      {resultsDiv}
    </div>
  );
};

export default MedicationSearch;
