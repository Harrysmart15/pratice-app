import './props.App.css';

function App() {
  
  return (
    <div className="App">
      
      <Details
      
      name ="hari"
      batch ="B43wd"
      based ="I😘"/>


      <Details
      name ="sri"
      batch ="B40wd"
      based ="LOVE💕"/>


      <Details
      
      name ="karthi"
      batch ="B41wd"
      based ="YOU❤️"/>

      <Details
     
      name ="nidhi"
      batch ="B42wd"
      based ="pondati🥰"
      range="miss u bby ma"/>
    </div>
  
  );
}

export default App;

function Details(props) {
  return (
    <div className="card">
        {props.img}
    <h1>{props.name}</h1>
    <p>{props.batch}</p>
    <p>{props.based}</p>
    
   
   
  
    </div>
  );
 }