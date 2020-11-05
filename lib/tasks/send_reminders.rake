namespace :app do
  desc "send reminders to users"
  task send_reminders: :environment do
    Reminder.pluck(:id).each do |reminder_id|
      reminder = Reminder.find(reminder_id)
      if reminder.time.hour == DateTime.now.hour
        SendReminderText.perform_async(reminder_id)
      end
    end
  end
end
