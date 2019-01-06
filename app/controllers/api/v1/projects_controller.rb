class Api::V1::ProjectsController < ApplicationController
  before_action :authenticate_api_v1_user!
  load_and_authorize_resource

  def create
    if @project.save
      render json: @project
    else
      render json: @project, status: :unprocessable_entity
    end
  end

  def index
    render json: @projects
  end

  def update
    @project.update(project_params)

    render json: @project
  end

  def destroy
    @project.destroy

    render json: @project
  end

  private

  def project_params
    params.require(:project).permit(:name).merge(user: current_api_v1_user)
  end
end
