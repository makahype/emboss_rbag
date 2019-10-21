class SessionsController < ApplicationController
  def new
  end

  def create

    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])

      session[:user_id] = user.id

      data = '{
          "created":true,
          "id": '+"#{user.id}"+'
      }'
      result = JSON.parse(data)
      render :json => result, :include => ''

      #redirect_to root_url, notice: "Logged in!"

    else

      data = '{
          "created":false
      }'
      result = JSON.parse(data)
      render :json => result, :include => ''

    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end

end