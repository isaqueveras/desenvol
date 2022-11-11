import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import FirebaseContext from '../../utils/FirebaseContext'
import TeacherService from '../../services/TeacherService'

const ListTeacherPage = () => {
	return (
		<FirebaseContext.Consumer>
			{value => <ListTeacher firebase={value} />}
		</FirebaseContext.Consumer>
	)
}

const ListTeacher = (props) => {
	const [teachers, setTeachers] = useState([])
	const [reload, setReload] = useState(false)

	useEffect(() => {
		TeacherService.list_on_snapshot(props.firebase.getFirestoreDb(), (teachers) => { setTeachers(teachers) })
	}, [])

	function deleteTeacherV2(id) {
		if (window.confirm('Deseja excluir?')) {
			TeacherService.delete(
				props.firebase.getFirestoreDb(),
				() => {
				   let temp = teachers
				   for(let i=0; i < temp.length; i++){
						if (temp[i].id === id) {
							temp.splice(i,1)
							break
						}
				   }
				   setTeachers(temp)
				   setReload(!reload)
				}, id
			)
		}
	}

	const generateTableBody = () => {
		return teachers.map(
			(element, index) => {
				element.key = index
				return (
					<tr>
						<td>{element.id}</td>
						<td>{element.name}</td>
						<td>{element.course}</td>
						<td>{element.wage}</td>
						<td>
							<Link to={'/teacher/edit/' + element.id} className='btn btn-primary'>
								Editar
							</Link>
						</td>
						<td>
							<button className='btn btn-danger' onClick={() => deleteTeacherV2(element.id)}>
								Apagar
							</button>
						</td>
					</tr>
				)
			}
		)
	}

	return (
		<div>
			<h1>Listar Professores</h1>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Curso</th>
						<th>Salario</th>
						<th colSpan={2}>Ações</th>
					</tr>
				</thead>
				<tbody>
					{generateTableBody()}
				</tbody>
			</table>
		</div>
	)
}

export default ListTeacherPage