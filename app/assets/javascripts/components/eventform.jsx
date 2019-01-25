class EventForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            new: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectInput = this.selectInput.bind(this);
    }

    handleChange(e){
        let name = e.target.name;
        obj = {}
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit();
        this.setState({
            new: false
        });
    }

    selectInput(name, values, value, label){
        return (
            <label>
                <select name={name} value={value} onChange={this.handleChange} required>
                    <option key='-1' value='' disabled defaultValue hidden>Seleccione {label}...</option>
                    {Object.keys(values).map(key=>{
                        return <option key={key} value={key}>{key}</option>
                    })}
                </select>
            </label>
        )
    }
    
    render() {
        return (
            <div>
                <h3>Crea un nuevo evento</h3>
                {this.state.new?
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input name='name'
                                placeholder='Nombre del evento'
                                value={this.props.input_name}
                                onChange={this.handleChange}
                                required/>
                        </label><br/>
                        {this.selectInput('category', this.props.categories,
                                        this.props.input_category,
                                        'la categoria')}
                        <br/>
                        <label>
                            <input name='place' placeholder='Lugar del evento'
                                value={this.props.input_place}
                                onChange={this.handleChange}
                                required/>
                        </label><br/>
                        <label>
                            <input name='address' placeholder='Dirección del evento'
                                value={this.props.input_address}
                                onChange={this.handleChange}
                                required/>
                        </label><br/>
                        <label>
                            Fecha de inicio: 
                            <input type='date' name='start_date' placeholder='Fecha de inicio del evento'
                                value={this.props.input_start_date}
                                onChange={this.handleChange}
                                required/>
                        </label><br/>
                        <label>
                            Fecha de fin:
                            <input type='date' name='end_date' placeholder='Fecha de finalización del evento'
                                value={this.props.input_end_date}
                                onChange={this.handleChange}
                                required/>
                        </label><br/>
                        {this.selectInput('assist_type', this.props.types,
                                        this.props.input_type,
                                        'el tipo')}
                                        <br/>
                        <input type='submit' value='Guardar'/>
                        <button onClick={() => this.setState({new: false})}>Cancelar</button>
                    </form>
                    :
                    <button onClick={() => this.setState({new: true})}>Crear evento</button>
                }
                
                
            </div>
        )
    }
}