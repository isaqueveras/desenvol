import { Routes, Route } from "react-router-dom"

import Home from '../Home';

import CreateStudent from '../students/CreateStudent';
import ListStudent from '../students/ListStudent';
import EditStudent from '../students/EditStudent';

import CreateTeacher from '../teacher/CreateTeacher';
import ListTeacher from '../teacher/ListTeacher';
import EditTeacher from '../teacher/EditTeacher';

const CRUDRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='student/create' element={<CreateStudent />} />
            <Route path='student/list' element={<ListStudent />} />
            <Route path='student/edit/:id' element={<EditStudent />} />

            <Route path='teacher/create' element={<CreateTeacher />} />
            <Route path='teacher/list' element={<ListTeacher />} />
            <Route path='teacher/edit/:id' element={<EditTeacher />} />
        </Routes>
    )
}

export default CRUDRoutes
