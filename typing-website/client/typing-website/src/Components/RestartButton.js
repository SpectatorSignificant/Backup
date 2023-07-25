export default function RestartButton(){
    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
        <a href="/test" className = "restart-button">
          <div className="restart-button" onClick={reloadPage}>Restart</div>
        </a>
    )
}