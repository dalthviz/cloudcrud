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

    updateEvent(event){
        this.props.handleUpdate(event);
    }

    selectInput(ref, values, label){
        return (
            <label>
                <select ref={input => this[ref] = input} required>
                    <option key='-1' value='' disabled defaultValue hidden>Seleccione {label}...</option>
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
                                <input name='name'
                                    placeholder='Nombre del evento'
                                    ref={input => this.name = input}
                                    defaultValue={this.props.event.name}
                                    required/>
                            </label><br/>
                            {this.selectInput(this.category, this.props.categories,
                                            'la categoria')}
                            <br/>
                            <label>
                                <input name='place' placeholder='Lugar del evento'
                                    defaultValue={this.props.event.place}
                                    ref={input => this.place = input}
                                    required/>
                            </label><br/>
                            <label>
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
                            {this.selectInput(this.assist_type, this.props.types,
                                            'el tipo')}
                                            <br/>
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
                {this.state.details && !this.state.edit? <button onClick={this.hideDetails}>Ocultar detalles</button> :
                                     !this.state.edit? <button onClick={this.showDetails}>Ver detalles</button>: <div></div>}
                {this.state.edit? <div></div>  :
                                  <div>
                                      <button onClick={this.changeEvent}>Editar</button>
                                      <button onClick={() => this.props.handleDelete(this.props.event.id)}>Borrar</button>
                                  </div>}                
                
                
            </div>
        )
    }
}