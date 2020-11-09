class Api::V1::MedicationsController < ApiController
  before_action :authenticate_user

  def index
    render json: current_user.medications
  end

  def create
    medication = Medication.new(medication_params)
    medication.user = current_user
    
    if medication.save
      render json: medication
    else 
      render json: { errors: medication.errors.full_messages.to_sentence }
    end
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

  def medication_params
    params.permit(:name, :dosage, :directions)
  end
end
