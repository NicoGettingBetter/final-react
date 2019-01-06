class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  #before_action :authenticate_user

  load_and_authorize_resource :task, only: :index
  load_and_authorize_resource through: :task, only: :index

  load_and_authorize_resource exept: :index

  def create
    if @comment.save
      render json: @comment
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def index
    render json: @comments
  end

  def destroy
    @comment.destroy

    render json: @comment
  end

  private

  def comment_params
    params.permit(
      :task_id,
      :content,
      :file
    )
  end
end
