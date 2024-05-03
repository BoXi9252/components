
function Gallery(props) {
    return (
        <div className="gallery">
        {
            props.urls.map((url)=> (
                <img src={url} alt="description" key={url} className="img"/>
            ))
        }
        </div>
       
    );
}

export default Gallery;