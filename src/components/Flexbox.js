import React from 'react'
import './flexbox.css'

export default function Flexbox() {
	return (
		<div className='container'>
			<div className='flex'>
				<h1>this is left</h1>
				<p>this is some kind of subtitle</p>
				<button>click me</button>
			</div>
			<div className='right'>
				<h1>this is left</h1>
				<p>this is some kind of subtitle</p>
				<button>click me</button>
			</div>
			<div className='right'>
				<h1>this is left</h1>
				<p>this is some kind of subtitle</p>
				<button>click me</button>
			</div>
			<div className='right'>
				<h1>this is left</h1>
				<p>this is some kind of subtitle</p>
				<button>click me</button>
			</div>
		</div>
	)
}
