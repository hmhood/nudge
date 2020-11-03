class CreateReminders < ActiveRecord::Migration[5.2]
  def change
    create_table :reminders do |t|
      t.belongs_to :user, null: false 
      t.string :medication, null: false
      t.time :time, null: false 

      t.timestamps
    end
  end
end
