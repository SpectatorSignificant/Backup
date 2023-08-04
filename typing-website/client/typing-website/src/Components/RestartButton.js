export default function RestartButton(){
    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
        <button className="restart-button" onClick={reloadPage}>
            <a href="/test" className = "restart-button">
            Restart
            </a>
        </button>
    )
}