 



 import React, { useState, useRef, useEffect } from 'react';

const TextCanvas = () => {
  const [texts, setTexts] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [editingText, setEditingText] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [fontSize, setFontSize] = useState(16); // Add state to manage font size
  const inputRef = useRef();

  // Add text item with customizable font size
  const addText = () => {
    const newText = { id: Date.now(), value: 'New Text', x: 50, y: 50, fontSize };
    setHistory([...history, texts]);
    setTexts([...texts, newText]);
    setFuture([]);
  };

  // Handle edit text
  const handleEditText = (id) => {
    const textToEdit = texts.find(text => text.id === id);
    setEditingText(id);
    setInputValue(textToEdit.value);
  };

  // Update text value
  const updateText = (id) => {
    setTexts(texts.map(text => 
      text.id === id ? { ...text, value: inputValue } : text
    ));
    setEditingText(null);
    setHistory([...history, texts]);
    setFuture([]);
  };

  // Focus the input after it's rendered
  useEffect(() => {
    if (editingText !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingText]);

  // Handle drag start
  const handleDragStart = (id, e) => {
    const textToDrag = texts.find(text => text.id === id);
    setDraggingId(id);
    setOffset({
      x: e.clientX - textToDrag.x,
      y: e.clientY - textToDrag.y,
    });
  };

  // Handle drag
  const handleDrag = (e) => {
    if (draggingId !== null) {
      setTexts(texts.map(text =>
        text.id === draggingId ? { ...text, x: e.clientX - offset.x, y: e.clientY - offset.y } : text
      ));
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setHistory([...history, texts]);
    setFuture([]);
    setDraggingId(null);
  };

  // Undo functionality
  const undo = () => {
    if (history.length > 0) {
      const prevState = history[history.length - 1];
      setFuture([texts, ...future]);
      setTexts(prevState);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  // Redo functionality
  const redo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setHistory([...history, texts]);
      setTexts(nextState);
      setFuture(future.slice(1));
    }
  };

  // Handle font size change dynamically for the selected text
  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);

    if (selectedTextId !== null) {
      setTexts(texts.map(text => 
        text.id === selectedTextId ? { ...text, fontSize: newSize } : text
      ));
      setHistory([...history, texts]);
      setFuture([]);
    }
  };

  return (
    <div className="w-full h-screen p-5 bg-gray-100">
      {/* Toolbar */}
      <div className="mb-4 flex justify-between items-center">
        <button onClick={addText} className="bg-blue-500 text-white px-4 py-2 rounded">Add Text</button>

        {/* Font size selector */}
        <div className="flex items-center">
          <label htmlFor="fontSize" className="mr-2">Font Size:</label>
          <input
            id="fontSize"
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="border rounded px-2 py-1"
            min="10"
            max="100"
          />
        </div>

        <div>
          <button onClick={undo} disabled={!history.length} className="bg-gray-500 text-white px-4 py-2 rounded mx-1">
            Undo
          </button>
          <button onClick={redo} disabled={!future.length} className="bg-gray-500 text-white px-4 py-2 rounded">
            Redo
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div
        className="relative w-full h-3/4 bg-white border rounded shadow-sm p-5 overflow-hidden"
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
      >
        {texts.map(text => (
          <div
            key={text.id}
            className="absolute cursor-pointer"
            style={{ top: `${text.y}px`, left: `${text.x}px`, fontSize: `${text.fontSize}px` }}
            onMouseDown={(e) => handleDragStart(text.id, e)}
            onClick={() => { handleEditText(text.id); setSelectedTextId(text.id); }}
          >
            {editingText === text.id ? (
              <input
                ref={inputRef}
                className="border rounded p-1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => updateText(text.id)}
                onKeyDown={(e) => e.key === 'Enter' && updateText(text.id)}
              />
            ) : (
              <span>{text.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCanvas;
