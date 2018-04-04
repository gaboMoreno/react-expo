const { render } = ReactDOM;
const {Component} = React;

class App extends Component{
	constructor(props){
		super(props);
	}

	handleMouseOver(){
		console.log("mouse Over")
	}

	handleOnMouseOut(){
		console.log("mouse Out")
	}

	render(){
		const itemsText = ["Item 1", "Item 1/2", "Missing item"];
		
		return(
			<div>
				<h1>Random Image</h1>
				<img onMouseOver={this.handleMouseOver}
					 onMouseOut={this.handleOnMouseOut}
					  src="http://lorempixel.com/400/200" alt="Sorry, no image avaliable" />
				<FormTest/>
			</div>
		);
	}
}


class FormTest extends React.Component{
    handleSubmit(element){
        element.preventDefault();
		alert(element.target.option.value);
	}
	
	updateState(event){
		console.log(event.target.value);
	}


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="option"   onChange = {this.updateState} />
                <button>Click me...</button>
            </form>
        );
    }
}


render( <App/>,document.getElementById('react-container'));