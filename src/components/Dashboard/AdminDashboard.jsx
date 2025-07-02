import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="min-h-screen w-full px-4 py-6 md:px-8 md:py-7 overflow-x-hidden">
            <Header changeUser={props.changeUser} />
            <div className="mt-4 space-y-6">
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard
