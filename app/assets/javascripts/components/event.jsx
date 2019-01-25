class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            details: false,
            edit: false
        };

        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.renderEvent = this.renderEvent.bind(this);
    }

    showDetails(){
        this.setState({
            details: true,
            edit: false
        });
    }

    hideDetails(){
        this.setState({
            details: false,
            edit: false
        });
    }

    changeEvent(){
        this.setState({
            details: false,
            edit: true
        });
    }

    updateEvent(e){
        e.preventDefault();
        let event = {
                     id: this.props.event.id,
                     name: this.name.value,
                     category: this.category.value,
                     place: this.place.value,
                     address: this.address.value,
                     start_date: this.start_date.value,
                     end_date: this.end_date.value,
                     assist_type: this.assist_type.value}
        this.props.handleUpdate(event);
        this.setState({
            details: false,
            edit: false
        });
    }

    selectInput(ref, values, defaultValue, label){
        return (
            <label>
                <select defaultValue={defaultValue} ref={input => this[ref] = input} required>
                    <option key='-1' value='' disabled hidden>Seleccione {label}...</option>
                    {Object.keys(values).map(key=>{
                        return <option key={key} value={key}>{key}</option>
                    })}
                </select>
            </label>
        )
    }

    renderEvent(){
        return <div>{
            (!this.state.details && !this.state.edit)?
                <div>
                <h4>{this.props.event.name}</h4>
                <p>Fecha de inicio: {this.props.event.start_date}</p>
                <p>Fecha de finalización: {this.props.event.end_date}</p>
                </div>
            : this.state.details?
                        <div>
                        <h4>{this.props.event.name}</h4>
                        <p>Categoría: {this.props.event.category}</p>
                        <p>Lugar: {this.props.event.place}</p>
                        <p>Dirección: {this.props.event.address}</p>
                        <p>Fecha de inicio: {this.props.event.start_date}</p>
                        <p>Fecha de finalización: {this.props.event.end_date}</p>
                        <p>Tipo: {this.props.event.assist_type}</p>
                        </div>
                    : this.state.edit?
                        <form onSubmit={this.updateEvent}>
                            <label>
                                Nombre: 
                                <input name='name'
                                    placeholder='Nombre del evento'
                                    ref={input => this.name = input}
                                    defaultValue={this.props.event.name}
                                    required/>
                            </label><br/>
                            <label>
                                Categoría: 
                                {this.selectInput('category', this.props.categories,
                                                    this.props.event.category, 'la categoria')}
                            </label><br/>
                            <label>
                                Lugar: 
                                <input name='place' placeholder='Lugar del evento'
                                    defaultValue={this.props.event.place}
                                    ref={input => this.place = input}
                                    required/>
                            </label><br/>
                            <label>
                                Dirección: 
                                <input name='address' placeholder='Dirección del evento'
                                    defaultValue={this.props.event.address}
                                    ref={input => this.address = input}
                                    required/>
                            </label><br/>
                            <label>
                                Fecha de inicio: 
                                <input type='date' name='start_date' placeholder='Fecha de inicio del evento'
                                    defaultValue={this.props.event.start_date.substr(0, 10)}
                                    ref={input => this.start_date = input}
                                    required/>
                            </label><br/>
                            <label>
                                Fecha de fin:
                                <input type='date' name='end_date' placeholder='Fecha de finalización del evento'
                                    defaultValue={this.props.event.end_date.substr(0, 10)}
                                    ref={input => this.end_date = input}
                                    required/>
                            </label><br/>
                            <label>
                                Tipo de asistencia: 
                                {this.selectInput('assist_type', this.props.types,
                                                this.props.event.assist_type, 'el tipo')}
                            </label><br/>
                            <input type='submit' value='Guardar'/>
                            <button onClick={()=>this.setState({details: false, edit: false})}>Cancelar</button>
                            </form>
                        : <div></div>
        }</div>
    }

    render() {
        return (
            <div>
                {this.renderEvent()}
                {this.state.details && !this.state.edit?
                        <div>
                            <button onClick={this.hideDetails}>Ocultar detalles</button>
                            <button onClick={this.changeEvent}>Editar</button>
                            <button onClick={() => this.props.handleDelete(this.props.event.id)}>Borrar</button>
                        </div>
                    :
                    !this.state.edit?
                        <div>
                            <button onClick={this.showDetails}>Ver detalles</button>
                            <button onClick={this.changeEvent}>Editar</button>
                            <button onClick={() => this.props.handleDelete(this.props.event.id)}>Borrar</button>
                        </div>
                    :
                    <div></div>}                
            </div>
        )
    }
}