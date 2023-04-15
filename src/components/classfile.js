import React from 'react'

class Classfile extends React.Component{
    render (){
        return(
            <>
                <h1>RSMPIYD {this.props.name}</h1>
                {this.props.children}
            </>
        )
    }
}
export default Classfile