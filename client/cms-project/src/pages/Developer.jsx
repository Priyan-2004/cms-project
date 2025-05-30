import { Link } from 'react-router-dom';

export default function Developer() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200">
			<div className="relative z-10 max-w-screen-sm mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-indigo-200">
				<h4 className="text-sm font-semibold text-indigo-700 mb-2 tracking-wide">
					<sup className="text-xs text-indigo-400">Meet the developer</sup>
				</h4>

				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow-sm">
					Hi, I'm <span className="text-indigo-600">Avinash</span>
					<br />
					<span className="text-blue-600">Founder of MVIII TECH</span>
				</h1>

				<p className="text-lg text-gray-700 mb-8 leading-relaxed">
					I'm a passionate software developer building modern, scalable web apps.
					This project showcases a clean and sleek CMS made with{' '}
					<strong className="text-black font-bold">React</strong>, aimed at beginners.
					<br />
					<span className="text-green-600 font-semibold inline-block animate-pulse border-r-2 border-green-700 pr-1 ml-1">
						Coding with ❤️
					</span>
				</p>

				<div className="flex flex-wrap gap-4">
					<Link
						to="/"
						className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-all duration-200"
					>
						Back to Home
					</Link>
					<a
						href="https://www.linkedin.com/in/your-linkedin-profile"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl shadow-lg shadow-gray-300 hover:bg-gray-200 transition-all duration-200"
					>
						Connect on LinkedIn
						<svg
							height="24"
							width="24"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="ml-2 text-blue-700"
						>
							<path d="M4.98 3.5C4.98 4.61 4.09 5.5 2.98 5.5S1 4.61 1 3.5 1.89 1.5 3 1.5s1.98.89 1.98 2zM.5 8.5h5v14h-5v-14zM8.5 8.5h4.8v2h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8.1v9.5h-5v-8.4c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.6h-5v-17z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
