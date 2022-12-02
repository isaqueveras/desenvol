import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import FirebaseContext from '../../utils/FirebaseContext'
import TeacherService from '../../services/TeacherService'

const EditTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <EditTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const EditTeacher = (props)=> {
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [wage, setWage] = useState('')

    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
        TeacherService.retrieve(
            props.firebase.getFirestoreDb(),
            (teacher)=>{
                setName(teacher.name)
                setCourse(teacher.course)
                setWage(teacher.wage)
            }, params.id)
    }, [])

    const handleSubmit = (event)=> {
        event.preventDefault()
        const updated = {name,course,wage}
        TeacherService.update(
            props.firebase.getFirestoreDb(),
            () => {
                navigate('/teacher/list')
            },
            params.id,
            updated
        )
    }

    return (
        <div style={{ marginTop:20 }}>
            <h2>Editar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome'
                        value={(name === null || name === undefined) ? '' : name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </div>
                <div className='form-group'>
                    <label>Curso: </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Digite o curso'
                        value={course ?? ''}
                        onChange={(event) => {setCourse(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>Salario: </label>
                    <input 
                        type='text'
                        step='any'
                        className='form-control'
                        placeholder='Digite o salário'
                        value={wage ?? ''}
                        onChange={
                            (event)=>{
                                setWage(event.target.value)
                            }
                        }
                         />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Editar Professor'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default EditTeacherPage
