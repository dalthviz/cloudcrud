class Event extends React.Component{
    render() {
        return (
            <div>
                <h4>{this.props.event.name}</h4>
                <p>Categoría: {this.props.event.category}</p>
                <p>Lugar: {this.props.event.place}</p>
                <p>Dirección: {this.props.event.address}</p>
                <p>Fecha de inicio: {this.props.event.start_date}</p>
                <p>Fecha de finalización: {this.props.event.end_date}</p>
                <p>Tipo: {this.props.event.assist_type}</p>
            </div>
        )
    }
}