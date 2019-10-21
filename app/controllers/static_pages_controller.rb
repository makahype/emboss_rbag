class StaticPagesController < ApplicationController
  def home
        render layout: "ag_layout"
  end

  def help
  end

  def notelist_test
    
    data = '{
      "is_claimed":true,
      "rating":3.5,
      "mobile_url":"http://m.yelp.com/biz/rudys-barbershop-seattle"
    }'
    result = JSON.parse(data)
    render :json => result, :include => ''
  end
end