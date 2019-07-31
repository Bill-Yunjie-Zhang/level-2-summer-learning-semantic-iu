import React from 'react';
import ImageGallery from './components/ImageGallery'
import MenuExampleBasic from './components/Menu'
// import Super from './components/Super'
// import CardGroup from './components/CardGroup'
import GroupCards from './components/GroupCards'

function App() {
  return (
    // <container>
        <div className="App">
          {/* <MenuExampleBasic/>
          <GroupCards perRow={2} count={4}/> */}
          {/* <CardGroup/> */}
          {/* <Super /> */}
          <MenuExampleBasic/>
          <GroupCards perRow={5} count={10}/>
          <ImageGallery perRow={2} count={4}/>
        </div>
    // </container>
  ); 
}

export default App;
