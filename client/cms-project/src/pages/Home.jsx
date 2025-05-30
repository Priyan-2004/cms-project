import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-4">
			<div className="relative z-10 max-w-xl w-full p-10 bg-white rounded-3xl shadow-xl border border-blue-100">
				<h4
					title="ceo of MVIII TECH (OPC) Pvt. Ltd."
					className="text-sm font-medium text-blue-600 mb-3 tracking-wide"
				>
					<sup className="text-xs text-blue-400">by</sup> Avinash ( BYTS )
				</h4>

				<h1 className="text-3xl sm:text-5xl font-bold mb-5 leading-snug text-gray-900 drop-shadow">
					The Beginner Level React Project
					<br />
					<span className="text-blue-600">Sleek CMS</span>
				</h1>

				<p className="text-md sm:text-lg text-gray-700 mb-8">
					This could be your very first best project to start after learning{' '}
					<strong>REACT</strong>.
					<br />
					<span className="text-red-500 font-semibold inline-block animate-typing border-r-2 border-blue-700 ml-1 whitespace-nowrap">
						Code like a pro
					</span>
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<Link
						to="/login"
						rel="noopener noreferrer"
						className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
					>
						Get started
					</Link>

					<a
						href="https://github.com/AvinashKumar3000/project-notes"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex justify-center items-center px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition duration-200"
					>
						Explore the code
						<svg
							height="24"
							width="24"
							aria-hidden="true"
							viewBox="0 0 24 24"
							className="ml-3"
						>
							<path d="M12 1C5.92 1 1 5.92 1 12c0 4.87 3.15 8.98 7.52 10.44.55.1.76-.24.76-.53v-2.02c-3.06.66-3.71-1.47-3.71-1.47-.5-1.27-1.22-1.6-1.22-1.6-1-.69.08-.68.08-.68 1.1.08 1.68 1.14 1.68 1.14.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.14-2.95-.12-.28-.5-1.4.1-2.92 0 0 .94-.3 3.08 1.14.88-.25 1.84-.38 2.8-.38s1.92.13 2.8.38c2.14-1.44 3.08-1.14 3.08-1.14.6 1.52.22 2.64.1 2.92.71.77 1.14 1.75 1.14 2.95 0 4.22-2.57 5.15-5.02 5.43.4.35.75 1.03.75 2.08v3.08c0 .3.2.64.77.53C19.85 20.98 23 16.87 23 12c0-6.08-4.92-11-11-11z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
