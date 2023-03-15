import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { putUserInfo } from '../api/userApi';
import { setEditName, setFirstname, setLastname } from '../app/features/LoginSlice';

const PopupWelcome = ({ changenamebtn }) => {
    const form = document.getElementsByClassName("form-popup")[0];
    const firstName = useSelector((state) => state.login.firstname)
    const lastName = useSelector((state) => state.login.lastname)
    const editNameBtn = useSelector((state) => state.login.editName)


    const dispatch = useDispatch();

    const handleSubmitName = async (e) => {
        try {
            e.preventDefault();
            const firstNameInput = e.target.parentNode.parentNode.children[0].children[0];
            const lastNameInput = e.target.parentNode.parentNode.children[0].children[1];
            console.log(firstNameInput.value);
            console.log(lastNameInput.value);
            dispatch(setFirstname(firstNameInput.value))
            dispatch(setLastname(lastNameInput.value))
            dispatch(setEditName(!editNameBtn));
            localStorage.setItem("firstName", firstNameInput.value);
            localStorage.setItem("lastName", lastNameInput.value);
            const infos = await putUserInfo({ firstName: firstNameInput.value, lastName: lastNameInput.value })
            console.log(infos);
        } catch (error) {
            console.log(error)
        }

        // console.log(firstNameFromLocalStrg)
    }


    const handleCancelName = (e) => {
        e.preventDefault();
        let form = e.target.parentNode.parentNode;

        console.log(editNameBtn)
        dispatch(setEditName(!editNameBtn))
    }

    return (
        <form className='form-popup' onSubmit={(e) => ""}>
            <div className="inputs-popup">
                <input className='' defaultValue={firstName} type="text" id='firstName' />
                <input defaultValue={lastName} type="text" id='lastName' />
            </div>
            <div className="btns-popup">
                <button onClick={handleSubmitName} className='btn-save' type='submit'>Save</button>
                <button onClick={handleCancelName} className='btn-cancel' type='submit'>Cancel</button>
            </div>
        </form>
    )
}

export default PopupWelcome