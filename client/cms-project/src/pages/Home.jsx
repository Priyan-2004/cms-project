import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
			<div className="relative z-10 max-w-screen-sm mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-blue-200">
				<h4
					title="ceo of NO (OPC) Pvt. Ltd."
					className="text-sm font-semibold text-blue-700 mb-2 tracking-wide"
				>
					<sup className="text-xs text-blue-400">by</sup> Avinash (BYTS)
				</h4>

				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow-sm">
					The Beginner Level React Project
					<br />
					<span className="text-blue-600">Sleek CMS</span>
				</h1>

				<p className="text-lg text-gray-700 mb-8 leading-relaxed">
					This could be your very first best project to start after learning{' '}
					<strong className="text-black font-bold">REACT</strong>.
					<br />
					<span className="text-red-500 font-semibold inline-block animate-pulse border-r-2 border-blue-600 pr-1 ml-1">
						Code like a pro
					</span>
				</p>

				<div className="flex flex-wrap gap-4">
					<Link
						to="/login"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-300 hover:bg-blue-700 transition-all duration-200"
					>
						Get started
					</Link>
					<a
						href="https://github.com/AvinashKumar3000/project-notes"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl shadow-lg shadow-gray-300 hover:bg-gray-200 transition-all duration-200"
					>
						Explore the code
						<svg
							height="24"
							width="24"
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="ml-2 fill-current text-black"
						>
							<path d="M12 1C5.92 1 1 5.92 1 12c0 4.99 3.657 9.163 8.438 10.326.617.115.843-.27.843-.6 0-.296-.011-1.08-.017-2.12-3.428.744-4.147-1.647-4.147-1.647-.562-1.43-1.375-1.812-1.375-1.812-1.125-.77.086-.755.086-.755 1.243.088 1.897 1.277 1.897 1.277 1.106 1.895 2.904 1.348 3.613 1.03.112-.8.434-1.348.789-1.66-2.737-.312-5.615-1.37-5.615-6.093 0-1.345.48-2.44 1.27-3.3-.127-.312-.55-1.566.12-3.264 0 0 1.04-.333 3.41 1.26A11.823 11.823 0 0112 6.844c1.054.005 2.114.143 3.102.42 2.37-1.593 3.408-1.26 3.408-1.26.672 1.698.248 2.952.12 3.264.792.86 1.268 1.955 1.268 3.3 0 4.735-2.882 5.776-5.628 6.082.447.385.846 1.143.846 2.305 0 1.665-.016 3.006-.016 3.414 0 .334.222.723.85.6C19.345 21.16 23 16.986 23 12c0-6.08-4.92-11-11-11z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
