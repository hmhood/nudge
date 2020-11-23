class Reminder < ApplicationRecord
  belongs_to :user

  validates :medication, presence: true
  validates :time, presence: true

  def send_sms 
    user_number = self.user.phone_number
    formated_user_number = phone_number.split("-").unshift("+1").join()

    @twilio_number = ENV['TWILIO_NUMBER']
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    @client = Twilio::REST::Client.new account_sid, ENV['TWILIO_AUTH_TOKEN']
    body = "Hi #{self.user.first_name} it's time to take your #{self.medication}!"
    if self.note != ""
      body.concat(" *Note: #{self.note}")
    end
    message = @client.messages.create(
      :from => @twilio_number,
      :to => formated_user_number,
      :body => body,
    )
  end
end
