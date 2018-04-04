const { render } = ReactDOM;
const {Component} = React;

class App extends Component{
	render(){
		return(
			<div>
				<h1 id='title' className='header'> Just a List of Items </h1>
				<SubTitle/>
				<ListItems/>
			</div>
		);
	}
}

class SubTitle	extends Component{
	render(){
		return (
			<p>Subtitle wrapper....just another Component</p>
		);
	}
}


class ListItems extends Component{
	render(){
		return (
			<ul>
				<li>Item</li>
				<li>Item</li>
				<li><SpecialItem/></li>
				<li>Item</li>
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

render( <App/>,document.getElementById('react-container'));