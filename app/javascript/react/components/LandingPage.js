import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = (props) => {
  return (
    <div>
      <div className="welcome">
        <h2>Welcome to Nudge!</h2>
        <h3 className="app-description">
          A simple app to help you adhere to your personal medication regimen.
        </h3>
        <button className="button" href="#">
          Create Reminder
        </button>
        <Link to="/reminders">
          <button className="hollow button secondary">My Reminders</button>
        </Link>
      </div>
      <div className="grid-container how-it-works">
        <h3 className="text-left">How it Works</h3>
        <div className="grid-x grid-margin-x medium-up-3 large-up-3">
          <div className="cell">
            <div className="card">
              <img
                className="how-it-works-pic"
                src="https://media.istockphoto.com/photos/businessman-using-laptop-computer-in-the-office-picture-id1137014758?k=6&m=1137014758&s=612x612&w=0&h=vWtD5innYnJfvVfsYEgT3-9xfs2Li5J7ra3yb1vWwPA="
              />
              <div className="card-section">
                <h4>Create an Account</h4>
                <p>
                  Click signup in the top right. Provide your name, email, and
                  phone number.
                </p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img
                className="how-it-works-pic"
                src="https://images.pexels.com/photos/280254/pexels-photo-280254.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
              <div className="card-section">
                <h4>Add a Reminder</h4>
                <p>
                  Create a new reminder for when you want to receive a daily
                  SMS.
                </p>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <img
                className="how-it-works-pic"
                src="https://images.pexels.com/photos/6400/woman-smartphone-girl-technology.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <div className="card-section">
                <h4>Receive Daily SMS</h4>
                <p>
                  A daily SMS will be sent to your phone reminding you to take
                  your medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="callout large primary">
        <div className="media-object stack-for-small">
          <div className="media-object-section">
            <div className="thumbnail">
              <img
                id="book-pic"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348322381i/3450744._UY400_SS400_.jpg"
              />
            </div>
          </div>
          <div className="media-object-section">
            <h4>What is 'Nudge theory'?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en
              im ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
              ehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
              ariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
              ulpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="https://www.goodreads.com/book/show/3450744-nudge">
              Link to Book
            </a>
          </div>
        </div>
      </div>
      <div className="callout large primary">
        <div className="media-object stack-for-small">
          <div className="media-object-section">
            <div className="thumbnail">
              <img
                id="research-pic"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </div>
          <div className="media-object-section">
            <h4>Research</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en
              im ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
              ehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
              ariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
              ulpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5480218/">
              Read the Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
