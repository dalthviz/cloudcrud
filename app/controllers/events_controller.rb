class EventsController < ApplicationController

  before_action :authenticate_user!

  def index
    @event = current_user.events.new
    @events = current_user.events.order('created_at DESC')
    @categories = Event.categories
    @types = Event.assist_types
  end

  def create
    @event = current_user.events.create(event_params)

    if @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def destroy
    current_user.events.destroy(params[:id])
  end

  def update
    @event = current_user.events.find(params[:id])
    status = @event.update_attributes(event_params)
    if status
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
  def event_params
    params.require(:event).permit(:name, 
                                  :category,
                                  :place,
                                  :address,
                                  :start_date,
                                  :end_date,
                                  :assist_type)
  end

end
