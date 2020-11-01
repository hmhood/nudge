import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created By: "}
      <Link color="inherit" href="https://github.com/hmhood">
        Heidi Hood
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to Nudge!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A simple app for helping you adhere to your medication regimen.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Create a Reminder
                  </Button>
                </Grid>
                <Grid item>
                  <Button id="button" variant="outlined" color="primary">
                    See my reminders
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
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
                      Click signup in the top right. Provide your name, email,
                      and phone number.
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
                      A daily SMS will be sent to your phone reminding you to
                      take your medication.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut en im ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in repr ehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla p ariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in c ulpa qui officia deserunt
                  mollit anim id est laborum.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut en im ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in repr ehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla p ariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in c ulpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5480218/">
                  Read the Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
