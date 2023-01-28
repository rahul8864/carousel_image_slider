import React, {useEffect} from 'react';
import './App.css';

function App() {
    const images = [
        {imgUrl: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg", name:"Image 1"},
        {imgUrl: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg", name:"Image 2"},
        {imgUrl: "https://images5.alphacoders.com/112/thumb-1920-1123013.jpg", name:"Image 3"},
        {imgUrl: "https://c4.wallpaperflare.com/wallpaper/554/925/286/fantasy-samurai-blue-landscape-wallpaper-preview.jpg", name:"Image 4"},
    ]
    
    useEffect(() => {
        const panels = document.querySelectorAll(".panel");
        // console.log(panels);
        panels.forEach(panel => {
            // console.log(panel)
            panel.addEventListener('click', () => {
                console.log('active')
                removeActiveClasses();
                panel.classList.add('active');
            })
        })
        const removeActiveClasses = () => {
            panels.forEach((panel) => {
                panel.classList.remove('active')
            })
        }
    },[])
    return (
        <div className='container'>
        {
            images?.map(item => (
            <div className='panel' style={{backgroundImage:`url(${item.imgUrl})`}}>
                <h3>{item.name}</h3>
            </div>
            ))
        }
        </div>
    )
}

export default App;