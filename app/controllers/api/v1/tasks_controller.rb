class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  #before_action :authenticate_user

  load_and_authorize_resource

  def create
    @task.save
    render json: @task
  end

  def index
    render json: @tasks
  end

  def update
    @task.update(task_params)

    render json: @task
  end

  def destroy
    @task.destroy

    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(
      :project_id,
      :name,
      :deadline,
      :done,
      :position
    )
  end

  def index_params
    params.permit(
      :project_id
    )
  end
end
