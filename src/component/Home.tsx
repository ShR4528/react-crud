import "./Home.style.css"
import { useState } from "react"
import { dummyEmployeeList, PageEnum, IEmployee } from "./Employee.type"
import EmployeeList from "./EmlpoyeeList"
import AddEmployee from "./AddEmployee"

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  )
  const [showPage, setShownPage] = useState(PageEnum.list)
  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add)
  }
  const shownListPage = () => {
    setShownPage(PageEnum.list)
  }

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data])
  }

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data)
    const tempList = [...employeeList]

    tempList.splice(indexToDelete, 1)
    setEmployeeList(tempList)
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>
      <section className="section-content ">
        {showPage === PageEnum.list && (
          <>
            {" "}
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
            />
          </>
        )}
        {showPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={shownListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}
      </section>
    </>
  )
}

export default Home
