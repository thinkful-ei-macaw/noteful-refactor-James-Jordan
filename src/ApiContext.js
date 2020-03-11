import React from 'react'

//Context contains notes, folders, and event handlers
export default React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
})