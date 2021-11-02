import React, { useState } from "react";

const tasks = [
  { id: "3dd936da-e963-4f59-b523-7c80ec86e7c1", note: "Cinema", completed: false },
  { id: "5c60b421-e76d-4792-b0ba-a70f208d68de", note: "Sleep", completed: false },
  { id: "3be841ca-6a6f-4359-8c90-86675d28ec74", note: "Eat", completed: false }
]

export const Home = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [note, setNote] = useState({
    data: 'Cinema'
  })

  const updateNote = () => {
    setIsEditable(!isEditable);
  }

  const handleEditableNote = (e) => {
    const { name, value } = e.target;
    setNote({
      [name]: value
    })
  }

  return (
    <div>
      <h2>To Do App</h2>

      <div>
        <div>
          {isEditable ? (
            <div>
              <input
                type='text'
                name='data'
                placeholder='Edit note'
                defaultValue={note.data}
                onChange={handleEditableNote}
              />
              <button onClick={updateNote}>Edit</button>
            </div>
          ) : (
            <div>
              <span>{note.data}</span>
              <button onClick={updateNote}>Edit</button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}