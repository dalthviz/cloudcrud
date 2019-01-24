class EventsController < ApplicationController
  def index
    @event = Event.new
    @events = Event.order('created_at DESC')
    @categories = Event.categories
    @types = Event.assist_types
  end

  def create
    @event = Event.create(event_params)

    if @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Event.destroy(params[:id])
  end

  def update
    event = Event.find(params[:id])
    status = event.update_attributes(event_params)
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
