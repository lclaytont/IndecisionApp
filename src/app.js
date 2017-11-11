class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
            console.log('fetching data');
        } catch (e) {
            // Do Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving data')
        }
        
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => (
            {options: prevState.options.filter((option) => (optionToRemove !== option))}))
    }
    
    handlePick() {
        const idx = Math.floor(Math.random() * this.state.options.length); 
        const pick = this.state.options[idx]; 

        alert(pick);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to Add Item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => (
            {options: prevState.options.concat([option])}
        ))}

    
    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subtitle={ subtitle } />
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0} 
                /> 
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={ this.state.options }
                /> 
                <AddOption 
                    handleAddOption={this.handleAddOption}
                /> 
            </div>
        );
    }
}


const Header = (props)  => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What Should I Do?
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>Options</p>
            {(props.options.length === 0) ? 'No Options to display at this time' : ''}
            <ul>
                {props.options.map(option => (
                    <Option
                        handleDeleteOption={props.handleDeleteOption}
                        key={props.options.indexOf(option)}
                        optionTxt={option}
                    ></Option>
                ))}
            </ul>
        </div>
    )
};

const Option = (props) => {
    return (
        <div>
            Option: { props.optionTxt }
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionTxt);
            }}>
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props); 
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input placeholder="New Option?" name="option" /> 
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));