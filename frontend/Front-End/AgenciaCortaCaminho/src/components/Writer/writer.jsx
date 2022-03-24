import React from 'react'
import Typewriter from 'typewriter-effect'
import './writer.css'

function Writer() {
	return (
    <div className="writer">
		<Typewriter 
			options={{
				strings: ['Corta Caminho', 'Viaje de Buenas' ],
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
			}}
		/>
    
    </div>
	)
}

export default Writer
