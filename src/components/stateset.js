import React from 'react'

class Stateset extends React.Component{
    constructor(){
        super()
        this.state = {
            name:1
        }
    }
    clickHandler(){
        this.setState(prevState => ({
            name:prevState.name + 1
            }))
    }
    render(){
        return(
            <>
                <h3>{this.state.name}</h3>
                <button onClick={() => this.clickHandler()}>click here</button>
            </>
        )
    }
}

export default Stateset