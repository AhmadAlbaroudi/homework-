const Search = (props) => {

    const submitObj = (event) => {
        event.preventDefault();
        props.setformObjlist(formObjlist => [...formObjlist, props.formObj])
        props.setorgList(formObjlist => [...formObjlist, props.formObj])
        props.setcatList(catList => !catList.includes(props.formObj.productCategory) ? [...catList, props.formObj.productCategory]: [...catList])
        // if (!orgList.includes(formObj.productCategory)) {
        //     setorgList(orgList => [...orgList, formObj.productCategory])
        // }
    }

    return (
        <form onSubmit={submitObj}>

            <input
                type="text"
                placeholder='Product Name'
                onChange={(event) => props.setformObj({ ...props.formObj, productName: event.target.value })}
                 ></input>
            <input
                type="number"
                placeholder='Product Amount'
                onChange={(event) => props.setformObj({ ...props.formObj, productAmount: event.target.value })}
                >

            </input>
            <input type="text"
                placeholder='Product Category'
                onChange={(event) => props.setformObj({ ...props.formObj, productCategory: event.target.value })}
                >
            </input>
            <input
                type="date"
                onChange={(event) => props.setformObj({ ...props.formObj, productDate: event.target.value })}
                >
            </input>
            <input type="submit" placeholder='Submit'></input>

        </form>



    )
}

export default Search;