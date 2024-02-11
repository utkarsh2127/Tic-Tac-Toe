import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing( (editing) => !editing );
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
        
    function handleChange(event) {
        setPlayerName(event.target.value);
        
    }

    let editablePlayer = <span className="player-name">{playerName}</span>
    
    if (isEditing) {
        editablePlayer =(
             <input type="text" required value={playerName} onChange={handleChange} />
        );
    }

    return (
        <li>
          <span className={isActive ? 'active' : undefined }>
            {editablePlayer}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'} </button>
          </li>
    );
}