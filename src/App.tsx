import React from 'react';

import Challenge from './Challenge';

function App() {
  return (
    <div className="App">
      <header data-component-name="AppHeader">
        <div
          style={{ marginLeft: 25, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <h1>Welcome To The Every.io Code Challenge.</h1>
          <div style={{ marginLeft: 50 }}>
            <a
              href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              rel="noreferrer"
              style={{
                color: 'white',
                background: 'black',
                padding: 8,
                borderRadius: 4,
                display: 'inline-block',
              }}
              target="_blank"
            >
              Checkout the Prototype
            </a>
          </div>
        </div>
      </header>
      <main
        data-component-name="AppMain"
        style={{
          width: 'calc(100vw - 50px)',
          margin: '0 auto',
          maxHeight: '100%',
          background: '#fcfcfc',
          border: '1px solid #000000',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 40,
        }}
      >
        <Challenge />
      </main>
    </div>
  );
}

export default App;
