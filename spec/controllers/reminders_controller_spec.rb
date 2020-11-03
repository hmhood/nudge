require "rails_helper"

RSpec.describe Api::V1::RemindersController, type: :controller do
  let!(:test_user1) { FactoryBot.create(:user) }
  let!(:test_user2) { FactoryBot.create(:user) }

  let!(:reminder_1) { 
    FactoryBot.create(
      :reminder, 
      user: test_user1,
      medication: 'Allegra',
      time: "08:25" 
    ) 
  }

  let!(:reminder_2) { 
    FactoryBot.create(
      :reminder,
      user: test_user2,
      medication: 'Claritin',
      time: "15:45"
    )
  }

  describe "GET#index" do
    it "should return a list of all a users reminders" do
      sign_in test_user1
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    
      expect(returned_json.length).to eq 1
      
      expect(returned_json[0]["medication"]).to eq "Allegra"
      expect(returned_json[0]["time"]).to eq "2000-01-01T08:25:00.000Z"
    end
  end
end