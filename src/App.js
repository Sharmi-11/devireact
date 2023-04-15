import Functionfile from './components/functionfile'
import Classfile from './components/classfile'
import Childcomp from './components/childcomp' 
import Stateset from './components/stateset'
import Eventfunc from './components/eventfunc'
import Eventclass from './components/eventcalss'
function App() {
  return (
    <>
      <h1>React App Sharmi</h1>
      <Eventfunc/>
      <Eventclass/>
      <Functionfile name="Forever"/>
      <Classfile name="rsmpiyd"> this is a children class component </Classfile>
      <Childcomp>This is children component</Childcomp>
      <Stateset/>
    </>
  )
}

export default App
