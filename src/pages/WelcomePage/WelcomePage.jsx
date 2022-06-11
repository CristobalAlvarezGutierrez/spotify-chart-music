import ActionButton from "../../components/actionButton/ActionButton"

const WelcomePage = () => {
	const handleSpotifyLogin = () => {
		const CLIENT_ID  = '1ecfa47f1129466e9385738f67cd9708';
		const REDIRECT_URI = 'http://localhost:3000/';
		const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
		const RESPONSE_TYPE = 'token';
		location.replace(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`)
	}

	return (
		<ActionButton
			buttonTitle="Login with Spotify"
			onClickFunction={handleSpotifyLogin}
		/>
	)
}

export default WelcomePage