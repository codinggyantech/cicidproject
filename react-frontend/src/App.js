import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://express-service:3001/api/data')
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>React App</h1>
            <p>Data from API: {data || 'Loading...'}</p>
        </div>
    );
}

export default App;