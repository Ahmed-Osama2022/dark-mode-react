import { useState } from 'react';
import './App.css';
import DarkBtn from './Components/DarkBtn/DarkBtn';

function App() {
  const [isDark, setIsDark] = useState(false);

  const onClickHandler = (event) => {
    if (isDark === false) {
      setIsDark(true);
      event.target.innerHTML = 'Light Mode';
    } else {
      setIsDark(false);
      event.target.innerHTML = 'Dark Mode';
    }

    // console.log(event.target.innerHTML);
  };
  return (
    <>
      {/* Let's make a dynamic style now!! */}
      <div className={`container ${isDark ? 'dark' : ''}`}>
        <DarkBtn onClickFunc={onClickHandler} />
      </div>
    </>
  );
}

export default App;
