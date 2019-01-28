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
                <select className='form-control' defaultValue={defaultValue} ref={input => this[ref] = input} required>
                    <option key='-1' value='' disabled hidden>Seleccione {label}...</option>
                    {Object.keys(values).map(key=>{
                        return <option key={key} value={key}>{key}</option>
                    })}
                </select>
        )
    }

    renderEvent(){
        return <div>{
            (!this.state.details && !this.state.edit)?
                <div>
                <h4>{this.props.event.name}</h4>
                <p>Fecha de inicio: {this.props.event.start_date.substr(0, 10)}</p>
                <p>Fecha de finalización: {this.props.event.end_date.substr(0, 10)}</p>
                </div>
            : this.state.details?
                        <div>
                        <h4>{this.props.event.name}</h4>
                        <p>Categoría: {this.props.event.category}</p>
                        <p>Lugar: {this.props.event.place}</p>
                        <p>Dirección: {this.props.event.address}</p>
                        <p>Fecha de inicio: {this.props.event.start_date.substr(0, 10)}</p>
                        <p>Fecha de finalización: {this.props.event.end_date.substr(0, 10)}</p>
                        <p>Tipo: {this.props.event.assist_type}</p>
                        </div>
                    : this.state.edit?
                        <form onSubmit={this.updateEvent}>
                            <div className='form-group'>
                                <label>Nombre: </label>
                                <input name='name'
                                    placeholder='Nombre del evento'
                                    ref={input => this.name = input}
                                    defaultValue={this.props.event.name}
                                    className='form-control'
                                    required/>
                            </div>

                            <div className='form-group'>
                            <label>Categoría: </label>
                                {this.selectInput('category', this.props.categories,
                                                    this.props.event.category, 'la categoria')}
                            </div>
                            <div className='form-group'>
                            <label>Lugar: </label>
                                <input name='place' placeholder='Lugar del evento'
                                    defaultValue={this.props.event.place}
                                    ref={input => this.place = input}
                                    className='form-control'
                                    required/>
                            </div>
                            <div className='form-group'>
                                <label>Dirección: </label>
                                <input name='address' placeholder='Dirección del evento'
                                    defaultValue={this.props.event.address}
                                    ref={input => this.address = input}
                                    className='form-control'
                                    required/>
                            </div>
                            <div className='form-group'>
                                <label> Fecha de inicio:</label> 
                                <input type='date' name='start_date' placeholder='Fecha de inicio del evento'
                                    defaultValue={this.props.event.start_date.substr(0, 10)}
                                    ref={input => this.start_date = input}
                                    className='form-control'
                                    required/>
                            </div>
                            <div className='form-group'>
                                <label>Fecha de fin: </label>
                                <input type='date' name='end_date' placeholder='Fecha de finalización del evento'
                                    defaultValue={this.props.event.end_date.substr(0, 10)}
                                    ref={input => this.end_date = input}
                                    className='form-control'
                                    required/>
                            </div>
                            <div className='form-group'>
                                 <label>Tipo de asistencia: </label>
                                {this.selectInput('assist_type', this.props.types,
                                                this.props.event.assist_type, 'el tipo')}
                            </div>
                            <input type='submit' value='Guardar' class='btn btn-primary'/>
                            <button onClick={()=>this.setState({details: false, edit: false})} class='btn btn-danger'>Cancelar</button>
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
                            <button onClick={this.hideDetails} class='btn btn-primary'>Ocultar detalles</button>
                            <button onClick={this.changeEvent} class='btn btn-primary'>Editar</button>
                            <button onClick={() => this.props.handleDelete(this.props.event.id)} class='btn btn-danger'>Borrar</button>
                        </div>
                    :
                    !this.state.edit?
                        <div>
                            <button onClick={this.showDetails} class='btn btn-primary'>Ver detalles</button>
                            <button onClick={this.changeEvent} class='btn btn-primary'>Editar</button>
                            <button onClick={() => this.props.handleDelete(this.props.event.id)} class='btn btn-danger' >Borrar</button>
                        </div>
                    :
                    <div></div>}                
            </div>
        )
    }
}