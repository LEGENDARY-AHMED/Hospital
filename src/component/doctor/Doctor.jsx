import { useContext } from 'react'
import { Navigation } from "../../context/GlobalContext";


const Doctor = () => {
  const { setFlag } = useContext(Navigation);
  setFlag(true);


    return (
      <div className='mt-10'> 
        <h2>Doctor Details</h2>
        <p>Name: Dr. John Doe</p>
      </div>
    )
  }


export default Doctor



