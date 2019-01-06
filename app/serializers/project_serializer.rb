# frozen_string_literal: true

class ProjectSerializer < ActiveModel::Serializer
  attributes :name

  has_one :user

  has_many :tasks
end
