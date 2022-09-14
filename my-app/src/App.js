import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComonent.js';
import linksdata from './data/linksdata.js';

/** This is the main file for you to develop your app!
 * Everything inside the App return statement will be rendered to the DOM.
*/

function App() {

  /** If you want to create a component, create it here and call it inside the return statement.
   * For example, if you want to create a component called "MyComponent", you can create it here and call it "MyComponent":
   * const MyComponent = () => {
   *  return <div>MyComponent</div>
   * }
   * Then, in the return statement, you can call it like this:
   * <MyComponent />
   * Learn more about components: https://reactjs.org/docs/components-and-props.html
   * 
   * To start:
   * cd repo
   * cd my-app
   * yarn
   * yarn start
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I guess this is my first react...
        </p>
        <div className = "text-component"> {
            linksdata.links.map((segment) => (
              <TextComponent
                key = {segment.name}
                name = {segment.name}
                linkedIn = {segment.linkedIn}
                portfolio = {segment.portfolio}
                gitHub = {segment.gitHub}
                youtube = {segment.youtube}
              />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
