class Api::V1::RemindersController < ApiController
  before_action :authenticate_user

  def index
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
