class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :reminders

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :phone_number, format: { with: /\d{3}-\d{3}-\d{4}/, message: "format 123-456-7890" }
  validates :first_name, presence: true
  validates :last_name, presence: true
end
