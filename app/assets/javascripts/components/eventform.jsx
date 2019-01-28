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
            <div className='form-group'>
                <label>
                </label>
                <select className='form-control' name={name} value={value} onChange={this.handleChange} required>
                    <option key='-1' value='' disabled defaultValue hidden>Seleccione {label}...</option>
                    {Object.keys(values).map(key=>{
                        return <option key={key} value={key}>{key}</option>
                    })}
                </select>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <h3>Crea un nuevo evento</h3>
                {this.state.new?
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label>
                            </label>
                            <input name='name'
                                placeholder='Nombre del evento'
                                value={this.props.input_name}
                                onChange={this.handleChange}
                                className='form-control'
                                required/>
                        </div>
                        {this.selectInput('category', this.props.categories,
                                        this.props.input_category,
                                        'la categoria')}
                        <div className='form-group'>
                            <label></label>
                            <input name='place' placeholder='Lugar del evento'
                                value={this.props.input_place}
                                onChange={this.handleChange}
                                className='form-control'
                                required/>
                        </div>
                        <div className='form-group'>
                            <label></label>
                            <input name='address' placeholder='Dirección del evento'
                                value={this.props.input_address}
                                onChange={this.handleChange}
                                className='form-control'
                                required/>  
                        </div>
                        <div className='form-group'>
                        <label>Fecha de inicio: </label>
                            <input type='date' name='start_date' placeholder='Fecha de inicio del evento'
                                value={this.props.input_start_date}
                                onChange={this.handleChange}
                                className='form-control'
                                required/>
                        </div>
                        <div className='form-group'>
                            <label>Fecha de fin: </label>
                            <input type='date' name='end_date' placeholder='Fecha de finalización del evento'
                                value={this.props.input_end_date}
                                onChange={this.handleChange}
                                className='form-control'
                                required/>
                        </div>
                        {this.selectInput('assist_type', this.props.types,
                                        this.props.input_type,
                                        'el tipo')}
                                        <br/>
                        <input type='submit' value='Guardar'
                                class='btn btn-primary'/>
                        <button onClick={() => this.setState({new: false})} class='btn btn-danger'>Cancelar</button>
                    </form>
                    :
                    <button onClick={() => this.setState({new: true})} class='btn btn-primary'>Crear evento</button>
                }
                
                
            </div>
        )
    }
}