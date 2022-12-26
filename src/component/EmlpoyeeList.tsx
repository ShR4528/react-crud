import "./EmployeeList.css"
import { IEmployee } from "./Employee.type"

type Props = {
  list: IEmployee[]
  onDeleteClickHnd: (data: IEmployee) => void
}

function EmployeeList(props: Props) {
  const { list, onDeleteClickHnd } = props

  // const onDeleteClickHnd = (data:IEmployee)
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
                  <input type="button" value="View" />
                  <input type="button" value="Edit" />
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
    </div>
  )
}

export default EmployeeList
