import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase/firebase";

export const UseContextData = createContext();

export const PorvideContext = ({ children }) => {
    const [formData, SetformData] = useState({
        name: '',
        last: '',
        city: '',
        state: '',
        zip: ''
    });
    const [id, setId] = useState();
    const [Users, setUsers] = useState([]);
    const [formtoggle, setToggle] = useState(true);
    // read data from firebase
    async function ReadData() {
        const querySnapshot = await getDocs(collection(db, "users"));
        let usersList = querySnapshot.docs.map(el => {
            return el;
        })
        setUsers(usersList);
    }

    // add data in db
    async function AddData(e, formData) {
        e.preventDefault();
        const insertData = await addDoc(collection(db, 'users'), formData);
        if (insertData.id) {
            alert('Data Added Successfully');
            SetformData({
                name: '',
                last: '',
                city: '',
                state: '',
                zip: ''
            })
            ReadData();
        }
    }

    // getDocuments using id
    async function getDocumetsUsingId(id) {
        setId(id);
        const getDocUsingId = doc(db, 'users', id);
        const docSnap = await getDoc(getDocUsingId);
        SetformData(docSnap.data());
        setToggle(false);
    }
    // update db
    async function UpdateData(e, updateData) {
        e.preventDefault();
        try {
            const docGetUsingId = doc(db, 'users', id);
            await updateDoc(docGetUsingId, updateData);
            alert('Successfully Updated');
            SetformData({
                name: '',
                last: '',
                city: '',
                state: '',
                zip: ''
            })
            setToggle(true);
            ReadData();
        } catch (error) {
            console.log('some error ');
        }
    }

    //   delete data in db
    async function DeleteData(deleteId) {
        await deleteDoc(doc(db, 'users', deleteId));
        alert('User Deleted Sucessfully');
        ReadData();
    }

    return (
        <UseContextData.Provider
            value={
                { AddData, ReadData, Users, DeleteData, UpdateData, getDocumetsUsingId, formtoggle, SetformData, formData }
            }
        >
            {children}
        </UseContextData.Provider>)
}