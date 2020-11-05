class Reminder < ApplicationRecord
  belongs_to :user

  validates :medication, presence: true
  validates :time, presence: true

  def send_sms 
    @twilio_number = ENV['TWILIO_NUMBER']
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    @client = Twilio::REST::Client.new account_sid, ENV['TWILIO_AUTH_TOKEN']
    body = "Hi #{self.user.first_name} it's time to take your #{self.medication}!"
    message = @client.messages.create(
      :from => @twilio_number,
      :to => '+14018356233',
      :body => body,
    )
  end
end
