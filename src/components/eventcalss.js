import React from 'react'

class Eventclass extends React.Component{

    clickHandler(){
        console.log('button click class')
    }
    render(){
        return(
            <>
                <button onClick={() => this.clickHandler()}>click here</button>
            </>
        )
    }
}

export default Eventclass