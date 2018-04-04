const { render } = ReactDOM;
const {Component} = React;

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: ["opcion a","opcion b","opcion c","opcion d"]
		}
	}

	render(){
		const itemsText = ["Item 1", "Item 1/2", "Missing item"];
		
		return(
			<div>
				<h1>Random Image</h1>
				<ListItems items={this.state.items}/>
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
		return this.props.items.map(
			(element, index) => <li key={index}>{element}</li>
		);
	}

	getDerivedStateFromProps(nextState, prevState){
		console.log(nextState, " ", prevState);
	}

	componentWillMount(){
		console.log("Component pre-load", this)
	}

	componentDidMount(){
		console.log("Component load", this)
	}

	UNSAFE_componentWillUnmount(){
		console.log("Component unload", this)
	}

	render(){
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}
}





render( <App/>,document.getElementById('react-container'));