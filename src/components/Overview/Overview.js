import React, { useState } from 'react'
import SearchInput from "../SearchInput/SearchInput";
import UsersList from "../UserList/UsersList";
import "./Overview.css"

export default function Overview() {
    const [users, setUsers] = useState("")
    
    return (
        <>
            <div className="Overview_main-image">
                <div className="github">
                </div>
            </div>
            <SearchInput users={users} setUsers={setUsers}/>
            <UsersList users={users}/>
        </>
    )
}
