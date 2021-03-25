import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  //props.myname ie dhiraj we accessed from central store
  return (
    <div className="App">
      <h1>This is a redux react demo</h1>
      <h1>This is a {props.myname} react demo</h1>
      <h1>This is i want to {props.yourname}</h1>
      <button onClick={()=>{props.changeName("suresh")}}>change it</button>
    </div>
  );
}

//we create arrow function and passes state which is return from recducer component and with the help of state we access the name which is state we created in redux component
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    yourname:state.wishes
  }
}
//dispatcher is used to change or update the state it accept two argument type,payload and it passes to reducer component ie Reducer.jsx ie action
const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:(name)=>{
      dispatch({
        type:"CHANGE_NAME",payload:name
      })
    }
  }
}
//here we use connect as a higher oder component which recive component itself ie app component is here
export default connect(mapStateToProps,mapDispatchToProps)(App);


//if you want to only pass the data without update then first argument is null 
// export default connect(null,mapDispatchToProps)(App);