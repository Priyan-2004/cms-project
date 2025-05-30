import { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import AuthContext from '../context/AuthContext';

const PATHS = [
	{ path: '/dashboard/intro', text: '🚩 intro' },
	{ path: '/dashboard/counter', text: '1️⃣ counter' },
	{ path: '/dashboard/stop-watch', text: '⌚ stop watch' },
	{ path: '/dashboard/calc', text: '🟰 calculator' },
	{ path: '/dashboard/todo-list', text: '📝 todo list' },
	{ path: '/dashboard/profile', text: '🧑 profile' },
];

const DASHBOARD_PATHS = [
	{ path: '/dashboard/cms/user-stats', text: '🧑‍🏫 stats' },
	{ path: '/dashboard/cms/add', text: '🆕 Add new ' },
	{ path: '/dashboard/cms/display', text: '📃 All content ' },
	{ path: '/dashboard/cms/favorites', text: '⭐ My Favorites ' },
	{ path: '/dashboard/cms/my-content', text: '😍 My Items ' },
];

export default function DashboardLayouts() {
	const location = useLocation();
	const { logout } = useContext(AuthContext);

	return (
		<div className="flex min-h-screen bg-gray-100">
			<aside className="p-6 w-64 sticky top-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col shadow-xl">
				<h2 className="text-2xl font-bold mb-6 text-white tracking-wide text-center">
					Dashboard
				</h2>

				<nav className="flex flex-col gap-1 w-full">
					{PATHS.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							style={location.pathname === item.path ? STYLE.active : STYLE.inactive}
							className={`px-4 py-2 rounded-lg font-medium text-sm transition duration-200 
								${location.pathname === item.path
									? 'bg-blue-600 shadow text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white'
								}`}
						>
							{item.text.charAt(0).toUpperCase() + item.text.slice(1)}
						</Link>
					))}
				</nav>

				<h3 className="mt-8 mb-4 text-xl font-semibold text-white border-t border-gray-600 pt-4">
					CMS
				</h3>

				<nav className="flex flex-col gap-1 w-full">
					{DASHBOARD_PATHS.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							style={location.pathname === item.path ? STYLE.active : STYLE.inactive}
							className={`px-4 py-2 rounded-lg font-medium text-sm transition duration-200 
								${location.pathname === item.path
									? 'bg-blue-600 shadow text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white'
								}`}
						>
							{item.text.charAt(0).toUpperCase() + item.text.slice(1)}
						</Link>
					))}
				</nav>

				<button
					onClick={logout}
					className="mt-auto w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition"
				>
					Logout
				</button>
			</aside>

			<main className="flex-1 min-h-screen overflow-y-auto p-8 bg-white">
				<Outlet />
			</main>
		</div>
	);
}

const STYLE = {
	active: {
		color: 'white',
	},
	inactive: {
		color: 'gray',
	},
};
