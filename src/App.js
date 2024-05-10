import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Webpage</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! My name is M.Sai Sree Akshitha. I am a web developer.</p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Email: akshitha0201@gmail.com</p>
          <p>Phone: 8143388415</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;