import React, { Fragment } from "react";
import Search from "./components/Search/Search";
import { useState } from "react";
import Filter from "./components/filter/Filter";
const App = (props) => {


  const [formObj, setFormObj] = useState({
    productName: "",
    productAmount: 0,
    productCategory: '',
    productDate: ''
  })
  
  const filterData = (value) => {
    const sendObj = orgList.filter(x => x.productCategory === value)
    setformObjlist(sendObj)
    console.log(sendObj);
  }
  

  const [catList, setcatList] = useState([])
  const [formObjlist, setformObjlist] = useState([])
  const [orgList, setorgList]=useState([])

  const allButton = () => {
    setformObjlist([...orgList])
  }

  return (
    <Fragment>
      <div>
        <Search formObj={formObj} setcatList={setcatList} setformObj={setFormObj} formObjlist={formObjlist} setformObjlist={setformObjlist} setorgList={setorgList}>
        </Search>
        <Filter catList={catList} filterData={filterData} allButton={allButton}> </Filter>
        <ul>
          {formObjlist.map((e) => {
            return (
              <div className="productList">
                <ul>
                  <h3>Product name: {e.productName}</h3>
                  <p>Product amount: {e.productAmount}</p>
                  <p>Product category: {e.productCategory}</p>
                  <p>Product date: {e.productDate}</p>
                </ul>

              </div>

            )
          })}
        </ul>
      </div>
    </Fragment>
  )
}


export default App;