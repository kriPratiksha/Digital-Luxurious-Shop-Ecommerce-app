import React from 'react'
import Layout from '../components/Layout/Layout'

function Homelifestyle() {
  return (
	<Layout title={"homrLifestyle"}>
		<div className='main'>
			<h2>HOME & LIVING</h2>
			
			<div className='ProductImg'>
			<img src='/images/Homelifestyle/p1.jpg' className='picture2' />
			</div>

			<div className='ProductImg'>
			<img src='/images/Homelifestyle/p2.jpg'/>
			</div>

			<div className='ProductImg'>
			<img src='/images/Homelifestyle/p3.jpg' className='picture2'/>
			</div>

			<div className='ProductImg'>
			<img src='/images/Homelifestyle/p4.jpg' className='picture2'/>
			</div>
		</div>
	</Layout>
  )
}

export default Homelifestyle;