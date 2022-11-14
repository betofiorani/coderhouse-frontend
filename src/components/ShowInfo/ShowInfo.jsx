import React, {useEffect, useState} from 'react'
import { getInfoAppService } from '../../services/infoAppService'
import './ShowInfo.css'

const ShowInfo = props => {

	const [info, setInfo] = useState()

	useEffect(() => {
		
		const getInfoApp = async () => {
			const {info} = await getInfoAppService()
			setInfo(info)
		}

		getInfoApp()

	}, [])
	

  return (
	<div className='info-container center'>
		<h1 className='info-title'>Info App</h1>
		<div className='info-container'>
			<p><span className='label'>puerto:</span> {info && info.puerto}</p>
			<p><span className='label'>plataforma:</span> {info && info.plataforma}</p>
			<p><span className='label'>Node Version:</span> {info && info.versionNode}</p>
			<p><span className='label'>memoriaTotalReservada:</span> {info && info.memoriaTotalReservada}</p>
			<p><span className='label'>Path Exec:</span> {info && info.pathExec}</p>
			<p><span className='label'>Process Id:</span> {info && info.processId}</p>
			<p><span className='label'>Carpeta Proyecto:</span> {info && info.carpetaProyecto}</p>
			<p><span className='label'>Cantidad CPU:</span> {info && info.cantCPUs}</p>				
		</div>
	</div>
  )
}


export default ShowInfo