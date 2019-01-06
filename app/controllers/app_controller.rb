# frozen_string_literal: true

class AppController < ApplicationController
  include ReactOnRails::Controller

  layout "app"

  def index; end
end
