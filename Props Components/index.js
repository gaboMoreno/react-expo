const { render } = ReactDOM;
const {Component} = React;

class App extends Component{
	sayHello(){
		alert("Hello");
	}


	render(){
		const itemsText = ["Item 1", "Item 1/2", "Missing item"]

		return(
			<div>
				<h1 id='title' className='header'> Just a List of Items </h1>
				<SubTitle date="12-12-2018" author="Mrs. X"/>
				<ListItems itemsText={itemsText}/>
				<SlaveButton action={this.sayHello}/>
			</div>
		);
	}
}

class SubTitle	extends Component{
	render(){
		return (
			<div>
				<p>Subtitle wrapper....just another Component</p>
				<p>This was created by ... {this.props.author}, on this specific time... {this.props.date} </p>
			</div>
			
		);
	}
}


class ListItems extends Component{
	render(){
		return (
			<ul>
				<li>{this.props.itemsText[0]}</li>
				<li>{this.props.itemsText[1]}</li>
				<li>{this.props.itemsText[2]}</li>
				<li><SpecialItem/></li>
			</ul>
		);
	}
}

class SpecialItem extends Component{
	render(){
		return (
			<p>This is a special <stron>ITEM</stron></p>
		);
	}
}


class SlaveButton extends Component{
	eventOnHover(){
		console.log("on hover detected");
	}

	render(){
		return (
			<button onClick={this.props.action}> Click Me...</button>
		);
	}
}

render( <App/>,document.getElementById('react-container'));