import React from 'react'
import './Puretooltips.css'

export default function PurecssTooltip() {
	return (
		<div>
			<button className='tooltip btn'>
				Hover to see
				<div className='tooltip-top'>
					<h5>this is a tooltip </h5>
					<p>more content can go here</p>
					<i></i>
				</div>
			</button>

			<div className='tooltip btn'>
				Hover Me to Preview
				<div className='tooltip-right'>
					<h3>right tip</h3>
					<p>tip body</p>
					<i></i>
				</div>
			</div>

			<a href='#' className='tooltip btn'>
				Hover Me to Preview
				<div class='tooltip-left'>
					<h3>left tip</h3>
					<p>tip body</p>
					<i></i>
				</div>
			</a>

			<a className='tooltip btn'>
				Hover Me to Preview
				<div className='tooltip-bottom'>
					<h3>left tip</h3>
					<p>tip body</p>
					<i></i>
				</div>
			</a>
		</div>
	)
}
