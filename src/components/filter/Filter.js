import React from "react";

class Filter extends React.Component {
    render() {
        return (
            <div>
                 <button onClick={() => this.props.allButton()}> All </button>
                {this.props.catList.map((value) => {
                    return (

                        <div>
                            <button onClick={() => this.props.filterData(value)}> {value} </button>
                        </div>
                        

                    )
                })}
            </div>
        )
    }
}

export default Filter 