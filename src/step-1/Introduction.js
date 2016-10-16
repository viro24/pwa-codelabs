import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div>
        <h1>1. Introduction</h1>
        <p>In this codelabs, you will be learning what is a Progressive Web Application, how it works and how to build one.</p>
        <p><b>Things you will learn</b></p>
        <ul>
          <li>What is a progressive web application</li>
          <li>Service worker lifecycle</li>
          <li>How to cache the resources</li>
          <li>Offline</li>
          <li>Push notifications</li>
        </ul>
        <p><b>Things you need</b></p>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/" target="_blank">Chrome Browser</a> 46 or above</li>
          <li>Text Editor</li>
          <li>Sample code</li>
          <li>Basic knowledge of <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">Javascript</span> and <span className="highlight">DevTools</span></li>
          <li><a href="https://nodejs.org/en/" target="_blank">Node</a> (for deployment)</li>
        </ul>

        <Note
          text="Fuxk off asdasdasdasdadadadsdjfljfkdfjdskfjdskfjsdklfjsdkljdsklfjsdklfjsdklfjsdklfjdklfjsdkfjskldfjkasdjfksdjfksdjfk;sdjfksjdfklsjdfklsjdfkl"
        />
      </div>
    );
  }
}

export default Introduction;