class Api::V1::RemindersController < ApiController
  before_action :authenticate_user

  def index
    render json: current_user.reminders
  end

  def create 
    reminder = Reminder.new(reminder_params)
    reminder.user = current_user
    
    if reminder.save
      render json: reminder
    else 
      render json: { errors: reminder.errors.full_messages.to_sentence }
    end
  end

  def destroy 
    reminder = Reminder.find(params[:id])
    reminder.destroy
    
    render json: current_user.reminders 
  end

  private 

  def authenticate_user
    if !user_signed_in?
      render json: {signInError: "Please sign in first before continuing."}
    end
  end

  def reminder_params
    params.permit(:time, :medication)
  end
end
