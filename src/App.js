import React from 'react';
// import ImageGallery from './components/ImageGallery'
// import MenuExampleBasic from './components/Menu'
// import Super from './components/Super'
// import CardGroup from './components/CardGroup'
import GroupCards from './components/GroupCards'
import PostList from './components/PostList'

function App() {
  return (
        <div className="App">
          <PostList />
          {/* <MenuExampleBasic/>
          <GroupCards perRow={2} count={4}/> */}
          {/* <CardGroup/> */}
          {/* <Super /> */}
          {/* <MenuExampleBasic/> */}
          <GroupCards perRow={5} count={10}/>
          {/* <ImageGallery perRow={2} count={4}/> */}
        </div>
  ); 
}

export default App;
