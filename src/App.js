import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Content />
      <footer className="footers">
        這裡是Footer
      </footer>
    </div>
  );
}

function Content() {
  return (
    <content>
      這裡是內容
    </content>
  )
}

function Header() {
  return (
    <header>
      這裡是
    </header>
  );
}

function Aside() {
  return (
    <aside>
      這裡是側攔
    </aside>
  );
}







export default App;
