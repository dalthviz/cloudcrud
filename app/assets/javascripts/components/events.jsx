class Events extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            events: this.props.events,
            categories: this.props.categories,
            types: this.props.types,
            name: '',
            category: '',
            place: '',
            address: '',
            start_date: '',
            end_date: '',
            assist_type: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
    }

    handleUserInput(obj) {
        this.setState(obj);
    }

    handleFormSubmit(){
        let event = {  name: this.state.name,
                       category: this.state.category,
                       place: this.state.place,
                       address: this.state.address,
                       start_date: this.state.start_date,
                       end_date: this.state.end_date,
                       assist_type: this.state.assist_type
                    };
        self = this;
        $.ajax({
            type:    "POST",
            url:     "/events",
            data:    {event: event},
            success: function(data) {
                self.addNewEvent(data);
            },
            error: function(xhr, error) {
                console.log(error);
            }
        });
    }

    addNewEvent(event) {
        let events = this.state.events.slice();
        events.push(event);
        this.setState({
            events: events.sort(function(a, b){
                return new Date(a.created_at) - new Date(b.created_at);
            })
        });
    }
    
    render() {
        return (
        <div>
            <EventForm onUserInput={this.handleUserInput}
                       onFormSubmit={this.handleFormSubmit}
                       categories={this.state.categories}
                       types={this.state.types}
                       input_name={this.state.name}
                       input_category={this.state.category}
                       input_place={this.state.place}
                       input_address={this.state.address}
                       input_start_date={this.state.start_date}
                       input_end_date={this.state.end_date}
                       input_type={this.state.assist_type}
                       />
            {this.state.events.map((event)=>{
                return (
                    <Event key={event.id} event={event}/>
                )
            })}

        </div>
        )
    }
}