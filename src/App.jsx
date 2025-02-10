
import './App.css'

function App() {

let random =Math.floor(Math.random()*100+1)
  const ism=prompt("ism kiriting")
  return (
    <>
      <div className="box">
        <h1>Hello my name is: <span style={{color:'yellow'}}>{ism}</span></h1>
        <h1>This is the day:<span style={{color:'yellow'}}>hfh</span></h1>
        <h1>A random number from 0 to 100: <br /> <span style={{color:random%2==1?'red':'green'}}>{random}</span></h1>
      </div>
    </>
  )
}

export default App
