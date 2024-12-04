import PortNavbar from '../Components/PortNavbar.jsx';
import PortMain from '../Components/PortMain.jsx';
import PortAbout from '../Components/PortAbout.jsx';
import PortWork from '../Components/PortWork.jsx';
import PortProjects from '../Components/PortProjects.jsx';
import PortContact from '../Components/PortContact.jsx';
import LandingPageNav from '../Components/LandingPageNav.jsx';

const PortfolioPage = () => {
	return (
		<div>
			<LandingPageNav />
			<PortNavbar />
			<PortMain />
			<PortAbout />
			<PortWork />
			<PortProjects />
			<PortContact />
		</div>
	);
};

export default PortfolioPage;

