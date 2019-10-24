class EndpointsController < ApplicationController
 # before_action :set_user, only: [:show, :edit, :update, :destroy]

  def user_notes
    user_notes = Note.where(:userid => session[:user_id])
    render json: user_notes 
  end

end
