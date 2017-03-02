import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';


const App = () => (
    <MuiThemeProvider>
        <Header />
    </MuiThemeProvider>
);
ReactDom.render(
    <App/>,

    document.getElementById('app')
)