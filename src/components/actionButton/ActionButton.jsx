import './actionButton.css';
const ActionButton = ({ buttonTitle, onClickFunction }) => {
    return (
        <button
            className='btn-action-button'
            onClick={onClickFunction ? onClickFunction : () => ""}
        >
            Login with Spotify
        </button>
    )
}

export default ActionButton