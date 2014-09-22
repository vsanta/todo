class UsersController < ApplicationController
  def create
    @user = User.new user_params
    if  @user.save
      render json: @user.to_json(only: :email)
    else
      head :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end
end
