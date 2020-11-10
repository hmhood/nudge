import React from "react";

const MedicationTile = (props) => {
  let directionsParagraph = null;
  if (props.data.directions) {
    directionsParagraph = <p>Directions: {props.data.directions}</p>;
  }

  const onDeleteClickHander = (event) => {
    event.preventDefault();
    props.deleteMedication(props.data.id);
  };

  return (
    <div className="callout">
      <h4>Medication</h4>
      <i className="fas fa-pills fa-2x"></i>
      <p>
        <b>Name:</b> {props.data.name}
      </p>
      <p>
        <b>Dosage:</b> {props.data.dosage}
      </p>
      {directionsParagraph}
      <button
        type="button"
        className="alert button"
        onClick={onDeleteClickHander}
      >
        Delete
      </button>
    </div>
  );
};

export default MedicationTile;
