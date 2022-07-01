import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { Container } from '@mui/system';
import { Box } from '@mui/material';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth="xxl">
        <Box textAlign={"left"} width={"100%"}>  
          <App />
        </Box>
      </Container>      
    </Provider>    
  </React.StrictMode>
);
