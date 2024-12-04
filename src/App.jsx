import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageNav from './Components/LandingPageNav';
import LandingPage from './Page/LandingPage';
import PortfolioPage from './Page/PortfolioPage';
import ServicesPage from './Page/ServicesPage';

function App() {
	return (
		<BrowserRouter>
			<div>
				<LandingPageNav />
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/Page/PortfolioPage' element={<PortfolioPage />} />
					<Route path='/Page/ServicesPage' element={<ServicesPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

