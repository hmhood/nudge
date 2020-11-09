class Api::V1::MedicationsController < ApiController
  before_action :authenticate_user

  def index
    render json: current_user.medications
  end

  def destroy
    medication = Medication.find(params[:id])
    medication.destroy
    
    render json: current_user.medications
  end

  private 

  def authenticate_user
    if !user_signed_in?
      render json: {signInError: "Please sign in first before continuing."}
    end
  end

end
