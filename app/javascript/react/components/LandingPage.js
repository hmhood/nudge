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
        <Link to="/reminders/new">
          <button className="button landing">Create Reminder</button>
        </Link>
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
                alt="person using laptop"
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
                alt="alarm clock"
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
                alt="woman looking at smart phone"
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
                alt="book cover Nudge"
              />
            </div>
          </div>
          <div className="media-object-section">
            <h4>What is 'Nudge theory'?</h4>
            <p>
              "Nudge is a concept in behavioral economics, political theory, and
              behavioral sciences which proposes positive reinforcement and
              indirect suggestions as ways to influence the behavior and
              decision making of groups or individuals. Nudging contrasts with
              other ways to achieve compliance, such as education, legislation
              or enforcement. The nudge concept was popularized in the 2008 book
              Nudge: Improving Decisions About Health, Wealth, and Happiness, by
              two American scholars at the University of Chicago: behavioral
              economist Richard Thaler and legal scholar Cass Sunstein..."
            </p>
            <a href="https://www.goodreads.com/book/show/3450744-nudge">
              <b>Link to Book</b>
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
                alt="researchers on laptops"
              />
            </div>
          </div>
          <div className="media-object-section">
            <h4>Research</h4>
            <p>
              "In the treatment of HIV infections, appointment attendance and
              medication adherence is critical to good control of this disease.
              Various methods have been attempted to increase compliance,
              including the use of text message reminders, which has had a
              number of published studies to evaluate its usefulness. Studies in
              urban HIV clinics in the U.S. have found that the vast majority of
              patients own mobile phones and would use them to enhance
              medication adherence (Miller & Himelhoch, 2013). Patients and
              providers both have noted some of the benefits of text message
              reminders, such as their ease of use and the ability to
              personalize messages and their timing (Baranoski et al., 2014)..."
            </p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5480218/">
              <b>Read the Study</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
