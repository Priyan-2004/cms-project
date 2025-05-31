import { Link, Outlet } from 'react-router';
import { FcNook } from 'react-icons/fc';

function BasicLayouts() {
	return (
		<>
			<header className="fixed w-full z-20 bg-white text-black py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-8">
				<div className="text-2xl font-bold flex items-center gap-2">
					<Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<FcNook className="text-3xl" />
						<span className="hidden sm:inline-block">Notes</span>
					</Link>
				</div>
				<div className="mt-3 sm:mt-0 flex gap-4">
					<Link
						to="/login"
						className="border border-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
					>
						Sign In
					</Link>
					<Link
						to="/sign-up"
						className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
					>
						Sign Up
					</Link>
				</div>
			</header>

			<main className="min-h-screen pt-20 pb-16 bg-white">
				<Outlet />
			</main>

			<footer className="fixed w-full bottom-0 z-10 bg-white text-gray-500 py-3 text-center border-t shadow-inner">
				© {new Date().getFullYear()} Notes App. All rights reserved.
			</footer>
		</>
	);
}

export default BasicLayouts;
