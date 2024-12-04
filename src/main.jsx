import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/next';
import './index.css';
import App from './App.jsx';

export default function RootLayout() {
	return (
		<html lang='en'>
			<head>
				<title>Next.js</title>
			</head>
			<body>
				<Analytics />
			</body>
		</html>
	);
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

