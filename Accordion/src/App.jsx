import { useState, useEffect, useRef } from 'react';
import items from './accordion_data';
import './style.css';

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const intialRender = useRef(true);
  useEffect(() => {
    if (intialRender.current) {
      intialRender.current = false;
      return;
    }
    console.log(`Updated openIndex: ${openIndex}`);
  }, [openIndex]); // Runs whenever openIndex changes

  function getIndex(index) {
    console.log('getIndex', index);
    setOpenIndex(index);
  }

  return (
    <div className='accordion'>
      {items.map((item, index) => {
        return <div key={index} className="accordion-item">
          <button className="title" onClick={() => getIndex(index)}>
            {item.title}
          </button>
          {openIndex === index && <div className="content">{item.content}</div>}
        </div>;

      })}
    </div>
  );
};

export default App;