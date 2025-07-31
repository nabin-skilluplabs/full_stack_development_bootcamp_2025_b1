import { people } from "./data";
import ScientistItem from "./ScientistItem";

export default function ScientistsList(){
    return (
        <div>
            <h2>Scientists</h2>
            {
                people.map((scientist) => (
                    <ScientistItem scientist={scientist} key={scientist.id} />
                ))
            }
        </div>
    );
}