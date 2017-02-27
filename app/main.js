import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
// import DrawerUndockedExample from './components/Menu'

const App = () => (
    <MuiThemeProvider>
        <Header />
        {/*<DrawerUndockedExample/>*/}
    </MuiThemeProvider>
);
ReactDom.render(
    <App/>,

    document.getElementById('app')
)