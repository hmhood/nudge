# example dummy data 

# User.destroy_all
# u1 = User.new(first_name: "Jane", last_name: "Doe", email: "jane@gmail.com", phone_number: "123-456-7890")
# u1.password = "123456"
# u1.save
# u2 = User.new(first_name: "John", last_name: "Smith", email: "john@gmail.com", phone_number: "789-456-7890")
# u2.password = "123456"
# u2.save

# r1 = Reminder.find_or_create_by!(time: "9:00", medication: "Advil", user: u1)
# r2 = Reminder.find_or_create_by!(time: "14:00", medication: "Allegra", user: u2)
# r3 = Reminder.find_or_create_by!(time: "08:30", medication: "Aleve", user: u2)

# m1 = Medication.find_or_create_by(name: "Tivicay", dosage: "50 mg", directions: "take 1/2 tablet one a day", user: u1)
# m2 = Medication.find_or_create_by(name: "Ziagen", dosage: "25 mg", directions: "take with food", user: u1)
# m3 = Medication.find_or_create_by(name: "Ibuprofen", dosage: "100 mg", directions: "take as needed", user: u2)