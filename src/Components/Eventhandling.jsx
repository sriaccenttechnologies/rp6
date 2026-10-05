const Eventhandling = () => {
  
  function  fun1()
  {
    console.log('function-1')
  }
  function  fun2()
  {
    console.log('function-2')
  }
  function  fun3(a)
  {
    console.log(a)
  }
  
    return (
    <>
    <button type="button" onClick={fun1()}>fun-1</button>
    <button type="button" onClick={fun2}>fun-2</button>
    <button type="button" onClick={ ()=>{fun3(10)} }>fun-3</button>
    </>
  )
}

export default Eventhandling





