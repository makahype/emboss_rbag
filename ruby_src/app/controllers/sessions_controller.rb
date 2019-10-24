class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render :json => {:created => true, :userid => user.id, :user_email => params[:email]}, :include => ""
    else
      render :json => {:created => false}, :include => ''
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end

end