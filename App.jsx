import React from 'react';

class App extends React.Component {
  render() {
  const currentRoute= window.location.pathname
    return (
      <div>Hola, te mostraré algunos datos: 
      <p id="hostname"/>
      <p id="domain"/>
      <p id="protocol"/>
      </div>
    );
  }
}

export default App;
