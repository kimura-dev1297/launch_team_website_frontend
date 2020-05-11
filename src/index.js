import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
