import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from '../redux-saga/user/action/action'
import { delete_user } from '../redux-saga/user/api/api'

function Home() {


    const [userData, setUserData] = useState({})
    const [view, setView] = useState()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer)


    function handleUser(e) {
        setUserData({ ...user, [e.target.name]: e.target.value })
        console.log(userData);
    }

    function addUser() {
        dispatch({ type: POST_USER_PENDING, payload: userData })
        setUserData({
            name: ""
        })
    }

    function deleteUser(id) {
        dispatch({ type: DELETE_USER_PENDING, payload: id })
    }

    function handleView(val, ind) {
        let data = user.user[ind]
        setView(data)

    }

    function handle(e) {
        setView({ ...view, [e.target.name]: e.target.value })

    }

    function update() {
        console.log(view, "view");
        dispatch({ type: UPDATE_USER_PENDING, payload: view })
        setView({
            name: ""
        })
    }


    return (
        <>

            <input type="text" name='name' placeholder='enter name' value={userData.name} onChange={handleUser} />
            <br /><br />
            <button onClick={addUser}>ADD USER</button>

            <br /><br /><br />
            <input type="text" name="name" value={view?.name} onChange={handle} />
            <button onClick={update}>update</button>
            {
                user.user.map((p, i) => {
                    return (
                        <>
                            <h4 style={{ textTransform: "capitalize" }}>{p.name}</h4>
                            <button onClick={() => {
                                deleteUser(p._id)
                            }}>delete</button>
                            <button onClick={() => handleView(p._id, i)}>view</button>
                        </>
                    )
                })
            }

        </>
    )
}

export default Home