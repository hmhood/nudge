require "rails_helper"

RSpec.describe Api::V1::MedicationsController, type: :controller do
  let!(:test_user1) { FactoryBot.create(:user) }
  let!(:test_user2) { FactoryBot.create(:user) }

  let!(:first_medication) { Medication.create(
    name: "medication name",
    dosage: "25 mg",
    directions: "take as needed",
    user: test_user1
  ) }
  let!(:second_medication) { Medication.create(
    name: "medication name2",
    dosage: "50 mg",
    user: test_user2
  ) }

  describe "GET#index" do
    it "should return a list of all the user's medications" do
      sign_in test_user1
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    
      expect(returned_json.length).to eq 1
      
      expect(returned_json[0]["name"]).to eq "medication name"
      expect(returned_json[0]["dosage"]).to eq "25 mg"
      expect(returned_json[0]["directions"]).to eq "take as needed"
    end
  end
end