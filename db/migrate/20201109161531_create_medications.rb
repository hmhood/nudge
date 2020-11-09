class CreateMedications < ActiveRecord::Migration[5.2]
  def change
    create_table :medications do |t|
      t.belongs_to :user, null: false 
      t.string :name, null: false 
      t.string :dosage, null: false 
      t.string :directions
    end
  end
end
