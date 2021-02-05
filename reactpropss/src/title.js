import React, { Component } from 'react'

class title extends Component {
    state = {
        isvisible: false
    }

  

    
    todos =  [
   'FullName: slim mezrigui',
   'Address: sousse',
   'Function:  genie Civil',
   

]

render() {
    console.log("render");
    return (
        
        <div className="page">
            <button className="visiblity-btn" onClick={this.togglevisibility}>show profil</button>
            {this.state.isvisible ?
            (<ul className="Profil">
            {this.todos.map((todo, i) => (
             
               
           
                <li key={i}  >{todo}
                <img className="photo" src={image} alt=""/>
                </li>
            ))}
            </ul>) : (<h4 className="notice">Click on the button to show profil</h4>)
            

            
        }
            
        </div>
    )
}
}



export default title ;