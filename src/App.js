import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [title, setTitle] = useState('welcome to my app');
    const [age, setAge] = useState(20);

    const changeTitle = () => {
        setTitle('title Chaged');
        setAge(50);
    };
    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <h1>Age : {age}</h1>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    );
}

export default App;
