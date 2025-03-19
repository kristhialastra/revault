const Background = ({imageUrl}) => {
    return(
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md z-0" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    )
}

export default Background;