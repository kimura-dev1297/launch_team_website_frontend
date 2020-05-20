import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#18206f'
		},
		secondary: {
			main: '#BD1E1E'
		},
		error: {
			main: '#D88373'
		},
		warning: {
			main: '#17255A'
		},
		background: {
			default: '#BDBDBD'
		},
		typography: {
			fontSize: '1rem'
		}
	}
});

export default theme;
