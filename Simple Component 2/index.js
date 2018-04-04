const { render } = ReactDOM;


const SimpleComponent = React.createClass({
	render() {
	  return (
		<div>
			<h1 id='title' className='header'> Hello World </h1>
			<p>Some text to display</p>
			<h2>Title 2</h2>
		</div>
	  );
	}
  });
  

render( <SimpleComponent/>,document.getElementById('react-container'));