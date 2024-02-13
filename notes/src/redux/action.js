export const addNotes = (val) =>{
   
    return {
        type:"ADD_NOTES",
        payload : val
    }
}

export const deleteNotes = (id) =>{
   
    return {
        type:"DELETE_NOTE",
        payload : id
    }
}

export const updateNotes = (id) =>{
   
    return {
        type:"UPDATE_NOTE",
        payload : id
    }
}


