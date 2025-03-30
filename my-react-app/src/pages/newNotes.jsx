import MenuPage from "../components/menu";
import SideBar from "../components/navbar";
import NoteTitle from "../components/NoteTitle";


function NewNotes(){
    return (
        <>
        <NoteTitle/>
       <MenuPage/>
       <SideBar/>
       </>
    )
}

export default NewNotes;