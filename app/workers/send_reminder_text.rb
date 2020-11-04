require 'sidekiq-scheduler'

class SendReminderText  
  include Sidekiq::Worker 

  def perform(reminder_id)
    reminder = Reminder.find(reminder_id)
    reminder.send_sms
  end
end