import React from "react";

const ReminderTile = (props) => {
  // refactor
  let timeString = props.data.time;
  let sliced_time = timeString.slice(0, -2);
  let date = new Date(sliced_time);
  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="callout">
      <h4>Reminder</h4>
      <p>Time: {time}</p>
      <p> Medication: {props.data.medication}</p>
    </div>
  );
};

export default ReminderTile;
