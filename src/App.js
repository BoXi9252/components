/*
  Intro to components

  In programming, a component is an independent, reusable piece of code
  Components are the building block of React applications.

  A React component is a function or a class that optionally accepets data and 
  returns a React element that describes some piece of user interface 

  Naming convention for componnets: PascalCase (file and component name)

  File: Header.js , function Header()
*/

// Local component. Yes, it is a bad practice!

import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"

function App() {
  let name = "SOPHIE MILLER";
  let des = "From France,Paris. I have rich experience in web design,also I am good at wordpress. I love to talk with you about our unique."
  let urls = [image1,image2,image3,image4]
  let footerContent = "© 2024 Yang Zhao.ALL RIGHTS RESERVED."
  return (
    <div className="container">
      <Header/>
      <Banner name={name} des={des} />
      <Gallery urls={urls}/>
      <Footer content={footerContent}/>
    </div>
  );
}

export default App;
