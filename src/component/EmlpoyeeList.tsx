import "./EmployeeList.css"
import { IEmployee } from "./Employee.type"
import EmployeeModal from "./EmployeeModal"
import { useState } from "react"

type Props = {
  list: IEmployee[]
  onDeleteClickHnd: (data: IEmployee) => void
}

function EmployeeList(props: Props) {
  const { list, onDeleteClickHnd } = props
  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data)
    setShowModal(true)
  }
  const editEmployee = () => {
    setEditModal(true)
  }

  const onCloseModal = () => setShowModal(false)

  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => editEmployee()}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          )
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  )
}

export default EmployeeList
