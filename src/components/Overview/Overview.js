import React, { useState } from 'react'
import SearchInput from "../SearchInput/SearchInput";
import UsersList from "../UserList/UsersList";
import "./Overview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Overview() {
    const [users, setUsers] = useState("")
    
    return (
        <>
            <div className="Overview_main-image">
                <div className="github">
                <FontAwesomeIcon icon={faGithub} size="6x" className="github-icon"/>
                </div>
            </div>
            <SearchInput users={users} setUsers={setUsers}/>
            <UsersList users={users}/>
        </>
    )
}
