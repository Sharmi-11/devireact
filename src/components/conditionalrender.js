import React from 'react'

class Conditionalrender extends React.Component{

    constructor(){
        super()
        this.state = {
            name: "priya"
        }
    }
    render(){
        const {name} = this.state
        let message 
        if(this.state.name){
            message ="true"
        } else {
            message ="false"
        }
        return(
            <>
                <h3>{message}</h3>
            </>
        )
    }
}

export default Conditionalrender