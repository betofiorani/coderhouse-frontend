import React, {useEffect, useState} from 'react'
import { getRandomProcessAppService } from '../../services/getRandomProcessAppService'
import './RandomProcess.css'

const RandomProcess = props => {

	const [random, setRandom] = useState()
    const [value, setValue] = useState()

	useEffect(() => {
		const getRandom = async () => {
			const random = await getRandomProcessAppService(value)
			console.log("desde getrandom", random)
            setRandom(random)
		}

		getRandom()

	}, [value])
	

  return (
	<div className='info-container center'>
		<h1 className='info-title'>Random Process</h1>
		<div className='info-container center'>
          <input type="number" name="cantidad" onChange={(e) => setValue(e.target.value) } />  			
		</div>
        <div className='info-container center overflow'>
            <p className='randoms'>{random && JSON.stringify(random)}</p>
        </div>
	</div>
  )
}


export default RandomProcess