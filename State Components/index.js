const { render } = ReactDOM;
const {Component} = React;

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			authors: this.authors = ["Person 1", "Denise Gutiérrez", "Albert Camus", "Sofia Rivera", "Gabo"],
			title: " extra info for the title",
			currentAuthor: 0
		}

		this.changeAuthor = this.changeAuthor.bind(this);
	}

	changeAuthor(){
		this.setState(
			(preState) => ({currentAuthor: (preState.currentAuthor + 1) % 5 })
		);
	}


	render(){
		const itemsText = ["Item 1", "Item 1/2", "Missing item"];
		
		return(
			<div>
				<h1 > Just a List of Items, {this.state.extrainfo} </h1>
				<SubTitle date="12-12-2018" author={this.state.authors[this.state.currentAuthor]}/>
				<SlaveButton action={this.changeAuthor}/>
				<ListItems itemsText={itemsText}/>
			</div>
		);
	}
}

class SubTitle	extends Component{
	render(){
		return (
			<div>
				<p>Subtitle wrapper....just another Component</p>
				<p>This was created by ... <strong>{this.props.author}</strong>, when ?... {this.props.date} </p>
			</div>
			
		);
	}
}


class ListItems extends Component{
	constructor(props){
		super(props);
		this.renderList =  this.renderList.bind(this);
	}

	renderList(){
		return this.props.itemsText.map(
			(element, index) => <li key={index}>{element}</li>
		);
	}


	render(){
		return (
			<ul>
				{this.renderList()}
			</ul>
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