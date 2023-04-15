function Eventfunc(){
    function clickHandler(){
        console.log('button click123')
    }
    return(
        <>
            <h1></h1>
            <button onClick={clickHandler}>click</button>
        </>
    )
}

export default Eventfunc