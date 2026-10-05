import Department from "../Components/Department"
const Home = (props) => {
  return (
    <>
    <p>{props.regno}</p>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <Department  department={props.department}/>
    </>
  )
}

export default Home