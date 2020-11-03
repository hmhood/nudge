# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.new(first_name: "Jane", last_name: "Doe", email: "jane@gmail.com", phone_number: "123-456-7890")
u1.password = "123456"
u1.save
u2 = User.new(first_name: "John", last_name: "Smith", email: "john@gmail.com", phone_number: "789-456-7890")
u2.password = "123456"
u2.save

Reminder.destroy_all
r1 = Reminder.find_or_create_by!(time: "9:00", medication: "Advil", user: u1)
r2 = Reminder.find_or_create_by!(time: "14:00", medication: "Allegra", user: u2)
r3 = Reminder.find_or_create_by!(time: "08:30", medication: "Aleve", user: u2)
