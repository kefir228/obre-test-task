import React, { useEffect, useState } from "react";

export const Main = ({ users, setUsers, isChecked, searchQuery }) => {
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, [setUsers]);

    useEffect(() => {
        let updatedUsers = users

        if (isChecked) {
            updatedUsers = [...updatedUsers].sort((a, b) => a.name.localeCompare(b.name))
        }
        if (searchQuery) {
            updatedUsers = updatedUsers.filter((user) =>
                user.name.toLowerCase().includes(searchQuery)
            )
        }
        setFilteredUsers(updatedUsers);
    }, [isChecked, users, searchQuery]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Users List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="border rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


