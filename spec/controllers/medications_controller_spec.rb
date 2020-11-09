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

  describe "POST#create" do
    it "creates a new medication" do
      sign_in test_user1
      post_json = { 
         name: "test medication",
         dosage: "25 mg",
      }

      prev_count = test_user1.medications.count
      post(:create, params: post_json, format: :json)
      expect(test_user1.medications.count).to eq(prev_count + 1)
    end
  end

  describe "POST#destroy" do
    it "deletes a user's medication" do
      sign_in test_user1
      
      prev_count = test_user1.medications.count
      post(:destroy, params: {id: first_medication.id}, format: :json)
      expect(test_user1.medications.count).to eq(prev_count - 1)
    end
  end
end