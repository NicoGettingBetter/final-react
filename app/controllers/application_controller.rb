class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  # self.responder = ApplicationResponder

  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  respond_to :json

  def current_ability
    @current_ability ||= Ability.new(current_api_v1_user)
  end
end
