export default function ScientistItem({ scientist }) {
    return (
        <div style={{display: "flex", gap: "100px", margin: "10px 0"}}>
            <img width={100} height={100} style={{borderRadius: "50%"}} src={ `https://i.imgur.com/${scientist.imageId}s.jpg`} alt={scientist.name} />
            <div style={{textAlign: "left"}}>
                <h2>{scientist.name}</h2>
                <p><strong>{scientist.profession}</strong> {scientist.accomplishment}</p>
            </div>
        </div>
    );
}