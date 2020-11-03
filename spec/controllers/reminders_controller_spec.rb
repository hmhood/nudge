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

  describe "POST#create" do
    it "creates a new reminder" do
      sign_in test_user1
      post_json = { 
         time: "12:45",
         medication: "test medication",
      }

      prev_count = test_user1.reminders.count
      post(:create, params: post_json, format: :json)
      expect(test_user1.reminders.count).to eq(prev_count + 1)
    end
  end
end