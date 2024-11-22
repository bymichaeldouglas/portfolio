// JqTt.jsx
import React, { useState } from'react';
import JqCard from '../components/JqCard';

const JqTt = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    string1: '',
    string2: '',
    maxH: 0,
    minH: 0,
    maxW: 0,
    minW: 0,
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    confidence: 0.0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem({
      string1: '',
      string2: '',
      maxH: 0,
      minH: 0,
      maxW: 0,
      minW: 0,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      confidence: 0.0,
    });
  };

  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i!== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({...newItem, [name]: value });
  };

  const [showOtherOptions, setShowOtherOptions] = useState(false);

  const fields = [
    { name:'string1', label: 'Parent' },
    { name:'string2', label: 'output."thing"' },
    { name:'maxH', label: 'Max H' },
    { name:'minH', label: 'Min H' },
    { name:'maxW', label: 'Max W' },
    { name:'minW', label: 'Min W' },
    { name: 'x', label: 'X' },
    { name: 'y', label: 'Y' },
    { name: 'w', label: 'W' },
    { name: 'h', label: 'H' },
    { name: 'confidence', label: 'Confidence' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">JQ TT List</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Parent:</label>
            <input
              type="text"
              name="string1"
              value={newItem.string1}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">output."thing":</label>
            <input
              type="text"
              name="string2"
              value={newItem.string2}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowOtherOptions(!showOtherOptions)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showOtherOptions? 'Hide Other Options' : 'Show Other Options'}
        </button>
        {showOtherOptions && (
          <div className="grid grid-cols-4 gap-4">
            {fields.slice(2).map((field, index) => (
              <div key={field.name} className="flex flex-col space-y-2">
                <label className="text-lg font-bold">{field.label}:</label>
                <input
                  type={field.name === 'confidence'? 'number' : 'text'}
                  step={field.name === 'confidence'? '0.01' : undefined}
                  name={field.name}
                  value={newItem[field.name]}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <JqCard item={item} onDelete={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JqTt;