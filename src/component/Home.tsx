import './Home.style.css'
import { useState } from 'react'
import { dummyEmployeeList, PageEnum, IEmployee } from './Employee.type'
import EmployeeList from './EmlpoyeeList'
import AddEmployee from './AddEmployee'

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  )
  const [showPage, setShownPage] = useState(PageEnum.list)
  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add)
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
            {' '}
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
            />
            <EmployeeList list={employeeList} />
          </>
        )}
        {showPage === PageEnum.add && <AddEmployee />}
      </section>
    </>
  )
}

export default Home
