import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        const result = eval(display.replace('×', '*').replace('−', '-'));
        setDisplay(String(result));
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  // Clean button layout
  const buttons = [
    { label: 'C', type: 'clear' },
    { label: '/', type: 'operator' },
    { label: '×', type: 'operator' },
    { label: '−', type: 'operator' },

    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '+', type: 'operator' },

    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '=', type: 'equals' },

    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '0', type: 'number' },

    { label: '.', type: 'number' }
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Calculator</h3>
              
              <div className="bg-dark text-white text-end p-4 fs-1 rounded mb-4" 
                   style={{ minHeight: '90px', fontFamily: 'monospace' }}>
                {display}
              </div>

              <div className="row g-2">
                {buttons.map((btn, index) => (
                  <div key={index} className="col-3">
                    <button 
                      className={`btn w-100 py-3 ${
                        btn.type === 'clear' ? 'btn-danger' :
                        btn.type === 'operator' ? 'btn-info' :
                        btn.type === 'equals' ? 'btn-primary' :
                        'btn-secondary'   // ← Light gray numbers
                      }`}
                      onClick={() => handleClick(btn.label)}
                    >
                      {btn.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;