import React, { Component } from "react";
import './style.css';


class Settimecounter extends Component{
constructor(props){
    super(props)
    this.state={
        timercount:"",
        countdown:false,
    }
}


handlechange=(e)=>{
    this.setState({
        timercount:e.target.value,
    })
}
handlestart=()=>{

    if(this.state.timercount >0){
        this.setState({countdown:true},()=>{
            const intervalcount=setInterval(()=>{
                this.setState((prev)=>({timercount:prev.timercount -1}),
                ()=>{
                    if(this.state.timercount <=0)
                    {   clearInterval(intervalcount);
                        this.setState({
                            countdown:false
                        })
                    }
                }
            )
            },500)
        })
       
    }
}
      
  
    

render(){
    return(
        <>
        <div className="countersettimeer">
        <h1>Task 2</h1>
            <label className="labelchnage">Timer value</label>
            <input type="text"  onChange={(e)=>{this.handlechange(e)}}></input>
           {this.state.countdown?<button type="submit" disabled >Start</button>:<button type="submit" className="startbtn" onClick={this.handlestart}>Start</button> } 
            <h2>Countdown: {this.state.timercount}</h2>
        </div>
        
        </>
    );
}

}
export default Settimecounter