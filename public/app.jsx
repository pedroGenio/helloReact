const Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();
        const nameRef = this.refs.name;
        const name = nameRef.value;
        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            })
        }
        // alert(name);
    },
    render: function () {
        const name = this.state.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

const firstName = 'Pedro';
ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);