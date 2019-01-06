# frozen_string_literal: true

class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :deadline, :done

  has_one :project
  has_many :comments
end
