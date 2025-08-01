import { useState } from 'react';

export default function ScientistItem({ scientist }) {
    let [visitCount, setVisitCount] = useState(0);
    let [backgroundColor, setBackgroundColor] = useState('#eeeeee');
    
    function sayHello() {
        alert(`Hello ${scientist.name}`);
        setVisitCount(visitCount + 1);
    }

    function changeBackground() {
        setBackgroundColor('#ff0000');
    }

    function resetBackground() {
        setBackgroundColor('#eeeeee');
    }
    return (
        <div
        onClick={sayHello}
        onMouseOver={changeBackground}
        onMouseLeave={resetBackground}
        style={{display: "flex", backgroundColor:backgroundColor , gap: "100px", margin: "10px 0"}}>
            <img width={100} height={100} style={{borderRadius: "50%"}} src={ `https://i.imgur.com/${scientist.imageId}s.jpg`} alt={scientist.name} />
            <div style={{textAlign: "left"}}>
                <h2>{scientist.name}</h2>
                <p><strong>{scientist.profession}</strong> {scientist.accomplishment}</p>
                {
                    scientist.showVisitCount && <p><small>Total clicks: {visitCount}</small></p>
                }
            </div>
        </div>
    );
}