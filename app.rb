require 'sinatra'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    erb :index
  end

  post '/temperature' do
    session[:temperature] = params[:temperature]
    p params
    p "post request works"
    p session[:temperature]

  end

run! if app_file == $0

end
