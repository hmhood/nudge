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
    notesParagraph = (
      <p>
        <b>Notes: </b>
        {props.data.note}
      </p>
    );
  }

  let icon = null;
  if (date.getHours() < 12) {
    icon = <i className="fas fa-sun fa-2x"></i>;
  } else {
    icon = <i className="fas fa-moon fa-2x"></i>;
  }

  return (
    <div className="callout reminder">
      <h4>Reminder</h4>
      {icon}
      <p>
        <b>Time: </b>
        {time}
      </p>
      <p>
        <b>Medication: </b>
        {props.data.medication}
      </p>
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
