import './App.css';
import myStyle from '../src/myStyle.module.css'
import Random from './Random';
import Example from './Example';

function App() {
  //js code
  const h1style= {color:'green',backgroundColor:'yellow',fontSize:'70px'}

  const subject='REACT'
  const username='maxwell'

  return (
    //html code
  <>
      <div>
         <h1 className={myStyle.reactStyle}>Hi</h1>
      </div>
      <h2 style={h1style}>hello</h2>
      <p className={myStyle.reactStyleT}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum dolorem est! Omnis fugiat reprehenderit aspernatur ab cupiditate eius sed, sapiente voluptatibus cum, obcaecati adipisci consequuntur ea suscipit ducimus sit.</p>

      <h1 className={[myStyle.style2,myStyle.style3].join(' ')}>components</h1>
      <h1>My content is :{subject}</h1>

      <ul>
        <li><Random uname={username}/></li>
        <li style={{color:'red'}}><Example sub={subject}/></li>
      </ul>
      
  </>
  );
}

export default App;
