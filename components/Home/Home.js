import React, {useState} from 'react';
import Class from "../Class/Class";
import ClassGraphQL from '../Class/ClassGraphQL';
import "./Home.css";


function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }


    return (
        <div>
            <h1>Hello! Welcome to the Classes Website</h1>
            <h2>Instructions</h2>
            <ol type="1">
                <li>1. Type your favorite class in the textbox.</li>
                <li>2. Then press the Add class button.</li>
                <li>3. Now you should see all your favorite classes.</li>
            </ol>
            <form onSubmit={handleSubmit}>
                <br></br>
                <label>Add Favorite Classes </label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form>
            <div className="my-classes">
                {favoriteClasses.map((favClass) =>
                   <Class name={favClass} key={favClass}></Class>
                )}
            </div>

            <div className="my-classes">
                {favoriteClasses.map((favClass) =>
                   <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>

        </div>
    )
}

export default Home;