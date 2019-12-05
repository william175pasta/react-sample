import React, { Component, Fragment } from 'react'
class B_test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            age: [20, 25, 28, 66],
            name: ["jefssf", "lucssy", "moelssly"]
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.inputChang.bind(this)} />


                    <button onClick={this.addName.bind(this)}>
                        年紀與姓名
                    </button>
                </div>
                <ul>
                    {
                        this.state.name.map((name, index) => {
                            return (
                                < li
                                    key={index + name}
                                    onClick={this.deleteItem.bind(this, index)}

                                >
                                    {name}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment >
        )

    }

    inputChang(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addName() {
        this.setState({
            name: [...this.state.name, this.state.inputValue],
            inputValue: ""
        })
    }
    deleteItem(index) {
        console.log(index)
    }

}
export default B_test

