class Medication < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :dosage, presence: true
end