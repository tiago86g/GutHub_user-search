import React from 'react'
import "./SearchInput.css"

export default function SearchInput({users, setUsers}) {
    return (
        <form className="SearchInput_form">
            <input
                className="SearchInput_input"
                type="text"
                placeholder="Search here for a GitHub user"
                value={users}
                onChange={(e)=>setUsers(e.target.value)}
            />
        </form>
    )
}
