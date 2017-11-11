console.log('app.js is running!');


//JSX - JavaScript XML 


const app = {
    title: 'Indecision App',
    subtitle: 'Putting your life in the hands of a computer',
    options: []
};

const formSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        indecisionRender();
    }
}

const wipeOptions = () => {
    app.options = [];
    indecisionRender();
}

const onMakeDecision = () => {
    if (app.options) {
        const choice = app.options[Math.floor(Math.random() * app.options.length)];
        alert(choice);
    }
}

const appRoot = document.getElementById('app');

const indecisionRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0 ? 'Here are your options' : 'No options')}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={wipeOptions}>Remove All</button>
            <ol>
                {app.options.map(option => <li key={app.options.indexOf(option)}>{option}</li>)}
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

indecisionRender();