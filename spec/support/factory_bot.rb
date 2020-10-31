require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    first_name { 'firstname' }
    last_name { 'lastname' }
    password { 'password' }
    phone_number { '617-123-4567' }
    password_confirmation { 'password' }
  end
end
