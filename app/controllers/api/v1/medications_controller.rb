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

  def search
    medication = params[:query]
    url = "https://api.fda.gov/drug/label.json?search='#{medication}'"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  
    if parsed_response["error"]
      error = parsed_response["error"]["message"]
      render json: { error: error }
    else 
      generic_name = parsed_response["results"][0]["openfda"]["generic_name"]
      if generic_name === nil
        generic_name = "N/A"
      end
      dosage_info = parsed_response["results"][0]["dosage_and_administration"][0]
      if parsed_response["results"] && parsed_response["results"][0] && parsed_response["results"][0]["warnings"]
        warnings = parsed_response["results"][0]["warnings"][0]
      end
      if warnings === nil
        warnings = "N/A"
      end

      render json: { generic_name: generic_name, dosage_info: dosage_info, warnings: warnings}
    end
  end

  private 

  def authenticate_user
    if !user_signed_in?
      render json: { signInError: "Please sign in first before continuing." }
    end
  end

  def medication_params
    params.permit(:name, :dosage, :directions)
  end
end
