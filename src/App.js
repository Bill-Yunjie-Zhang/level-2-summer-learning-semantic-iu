import React from 'react';
import Gallery from './components/ImageGallery'
import MenuExampleBasic from './components/Menu'
import Super from './components/Super'

function App() {
  return (
    <div>
        <MenuExampleBasic/>
        <Super />
        <div className="App">
          <Gallery perRow={4} count={100}/>
        </div>
    </div>
  );
}

export default App;
