import SideBar from "../components/navbar";
import NoteTitle from "../components/NoteTitle";
import WriteNotes from "../components/WriteInput";


function NewNotes(){
    return (
        <>
        <NoteTitle/>
        <WriteNotes/>
       <SideBar/>
       </>
    )
}

export default NewNotes;