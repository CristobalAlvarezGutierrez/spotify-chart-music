import { useEffect } from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import MusicChartPage from './pages/MusicChartPage/MusicChartPage';
import './assets/css/style.css';

const mainPage = () => {

	useEffect(() => {
		const url = window.location.href;
		const hash = url.substring(url.indexOf('#') + 1);
		let result = hash.split('&')

		if(result.length > 1)
		{
			localStorage.setItem('access_token', result[0]);
			console.log(localStorage.getItem('access_token'));
		}
	}, [])

	return (
		localStorage.getItem('access_token')
		?
		<MusicChartPage />
		:
		<WelcomePage />
	)
}

export default mainPage