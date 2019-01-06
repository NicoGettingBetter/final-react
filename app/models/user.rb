class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable, authentication_keys: [:email]
  include DeviseTokenAuth::Concerns::User

  has_many :projects, dependent: :destroy
end
