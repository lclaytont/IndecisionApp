class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const num = parseInt(localStorage.getItem('num'));

        if (!isNaN(num)) {
            this.setState(() => ({ count: num }));
            console.log('Mounted Component')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) { 
            const num = this.state.count; 
            localStorage.setItem('num', num);
            console.log('Updated Component');
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));
