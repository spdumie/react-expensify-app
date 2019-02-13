import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      <GoogleMap />
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />

      ) : ( 
        <p>Hey ! </p>
        
      )}  
    </div>
  );
}


const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));



