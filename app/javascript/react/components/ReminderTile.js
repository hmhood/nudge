import React from "react";

const ReminderTile = (props) => {
  let timeString = props.data.time;
  let date = new Date(timeString);
  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const onDeleteClickHander = (event) => {
    event.preventDefault();
    props.deleteReminder(props.data.id);
  };

  let notesParagraph = null;
  if (props.data.note) {
    notesParagraph = <p>Notes: {props.data.note}</p>;
  }

  return (
    <div className="callout reminder">
      <h4>Reminder</h4>
      <i className="fas fa-sun"></i>
      <p>Time: {time}</p>
      <p> Medication: {props.data.medication}</p>
      {notesParagraph}
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

export default ReminderTile;
