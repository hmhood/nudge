import React, { useEffect, useState } from "react";
import MedicationIndexPage from "./MedicationsIndexPage";
import ReminderTile from "./ReminderTile";

const RemindersIndexPage = (props) => {
  const [reminders, setReminders] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("/api/v1/reminders", {
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
          setReminders(body);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const deleteReminder = (reminderId) => {
    fetch(`/api/v1/reminders/${reminderId}`, {
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
      .then((userReminders) => {
        setReminders(userReminders);
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

  let reminderList = null;

  if (reminders.length === 0 && errorMessage === null) {
    reminderList = <p>No reminders yet!</p>;
  } else {
    reminderList = reminders.map((reminderObject) => {
      return (
        <ReminderTile
          key={reminderObject.id}
          data={reminderObject}
          deleteReminder={deleteReminder}
        />
      );
    });
  }

  return (
    <div className="grid-container reminders-index-container">
      <h3>My Reminders</h3>
      <a className="button primary" href="/reminders/new">
        Add a reminder
      </a>
      <a className="button primary my-medications" href="/medications">
        My Medications (beta)
      </a>
      <div className="reminders-list">{reminderList}</div>
      {errorsDiv}
    </div>
  );
};

export default RemindersIndexPage;
