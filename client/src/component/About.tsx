import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="w-full px-6 py-12 text-left bg-gray-300 text-gray-700 leading-normal">
			<div className="container max-w-4xl mx-auto flex justify-center flex-wrap md:flex-no-wrap">
				<div className="w-full md:w-1-3">
					<h3 className="text-3xl mb-8 text-black leading-tight">
						Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>
					
					<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.</p>
					<p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="w-full md:w-2-3 pt-10 md:px-6 md:pt-0">
					<img src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800" className="w-full h-auto" />
				</div>
			</div>
		</div>
    )
}

export default About
