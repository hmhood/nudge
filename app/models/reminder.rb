class Reminder < ApplicationRecord
  belongs_to :user

  validates :medication, presence: true
  validates :time, presence: true
end

