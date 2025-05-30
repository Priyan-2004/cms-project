import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import BasicLayouts from '../layouts/BasicLayouts';
import DashboardLayouts from '../layouts/DashboardLayouts';


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<BasicLayouts />}>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Route>
			<Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<DashboardLayouts />
					</PrivateRoute>
				}
			>
				<Route path="/dashboard/cms/my-content" element={<MyItems />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}