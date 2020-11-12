# README

[![Codeship Status for hmhood/nudge](https://app.codeship.com/projects/6414e95f-deb8-4d7d-acab-f6d9fbc73971/status?branch=main)](https://app.codeship.com/projects/415488)

# Nudge

https://nudge-reminder.herokuapp.com/

### Description: 
Nudge is a medication reminder application that aims to help individuals adhere to their medication regimen. Users can create reminders in order to receive automated daily text messages to help promote medication adherence. Users are also able to add medications and lookup drug information using the openFDA API. (*texts to non-verified Twilio numbers will not be sent, functionality supports users in Eastern Time Zone UTC-05:00)

## Setup - to run this app locally 
-  download repo 
- `bundle install`
- `yarn install`
- `bundle exec rake db:create`
- `bundle exec rake db:migrate`
- `yarn run start`
- in a new terminal window `rails s`
- in a new terminal window `bundle exec sidekiq`
- in browser navigate to localhost:3000

## Testing - to run test files 
* `bundle exec rspec`

## Technologies
* Ruby - 2.6.5
* Rails - 5.2.3
* React - 16.8.0
* PostgreSQL
* Foundation 
* Twilio-Ruby 
* Sidekiq 
* Redis 
* Faraday 
* Devise 
* Heroku Scheduler 
