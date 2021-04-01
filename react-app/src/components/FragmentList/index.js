// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import DreamForm from "../DreamForm";
// import DreamPage from "../DreamPage";
// import "./DreamList.css";

// import { fetchUserDreams } from "../../store/users"

// function UserDreamList({ user }) {

//   const dispatch = useDispatch();
//   const dreams = useSelector(state => {
//     return state.users
//   })

//   const [deleteDream, setDeleteDream] = useState();
//   const [editDream, setEditDream] = useState(false);
//   const [title, setTitle] = useState();
//   const [keywords, setKeywords] = useState();
//   const [notes, setNotes] = useState();

//   useEffect(() => {
//     setDeleteDream();
//     dispatch(fetchUserDreams(user.id))
//   }, [dispatch, editDream, user.id, deleteDream, title, keywords, notes]);
  
//   if (!user) {
//     return null;
//   }

//   const deleteOnClick = async (e) => {
//     e.preventDefault();
//     setDeleteDream("");
//     await fetch(`/api/dreams/${e.target.value}`, {
//       method: "DELETE"
//     });
//   }
//   const editOnClick = async (e) => {
//     e.preventDefault();
//     setEditDream(true);
//   }

//   const saveOnClick = async (e) => {
//     e.preventDefault();
//     await fetch(`/api/dreams/${e.target.value}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         keywords,
//         notes
//       })
//     })
//     setTitle(title);
//     setKeywords(keywords);
//     setNotes(notes);
//     setEditDream(false);
//   }

//   if (editDream === false) {
//     return (
//         <div>
//           {dreams.map(dream => {
//             return (
//               <>
//                 <div className="dream-card">
//                   <h4>Title</h4>
//                   <p>{dream.title}</p>
//                   <h4>Keywords: </h4>
//                   <p style={{"whiteSpace": "pre-line"}}>{dream.keywords}</p>
//                   <h4>Notes: </h4>
//                   <p style={{"whiteSpace": "pre-line"}}>{dream.notes}</p>
//                   <br/>
//                   <button value={dream.id} onClick={editOnClick}>Edit</button>
//                   <button value={dream.id} onClick={deleteOnClick}>Delete</button>
//                 </div>
//               </>
//             )
//           })}
//         </div>
//     );
//   } else {
//     return (
//       <div>
//         {dreams.map(dream => {
//           return (
//             <>
//               <div className="dream-card">
//                 <h2>
//                   <h4>Title</h4>
//                   <input 
//                   placeholder={dream.title}
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   ></input>
//                 </h2>
//                 <h4>Keywords: </h4>
//                   <textarea 
//                   placeholder={dream.keywords}
//                   value={keywords}
//                   onChange={(e) => setKeywords(e.target.value)}
//                   rows="3" cols="10"
//                   />
//                 <h4>Notes: </h4>
//                   <textarea 
//                   placeholder={dream.notes}
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   rows="3"
//                   />
//                 <br/>
//                 <button value={dream.id} onClick={saveOnClick}>Save</button>
//                 <button value={dream.id} onClick={deleteOnClick}>Delete</button>
//               </div>
//             </>
//           )
//         })}
//       </div>
//   );  }
// }
// export default UserDreamList;
