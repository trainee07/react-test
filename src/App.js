import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/MainComponent';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const store = Store();

class App extends Component {
  
  render() { 

		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App">
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
   }
}

export default App;
