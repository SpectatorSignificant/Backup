export default function RestartButton(){
    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
        <button tabIndex={1} className="restart-button" onClick={reloadPage}>
            <a href="/test" className = "restart-button">
            Restart
            </a>
        </button>
    )
}