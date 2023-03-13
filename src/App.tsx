import React from 'react';
import SearchAutoComplete from './components/common/SearchAutoComplete';
import TagSearchAutoComplete from './components/common/TagSearchAutoComplete';


function App() {
  return (
    <>
      <h1>Hello</h1>
      <div style={{ display: 'flex' }}>
        <SearchAutoComplete size='large' />
        <TagSearchAutoComplete size='large' />
      </div>
    </>
  );
}

export default App;
