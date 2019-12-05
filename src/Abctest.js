import React, { Component, Fragment } from 'react'
class Abctest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ["按摩a腳部", "按摩s手部", "按摩c頭部"],
            name: ["jeff", "lucy", "moelly"]
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.inputChang.bind(this)} />
                    <button onClick={this.addList.bind(this)}>服務項目
                    </button>
                </div>
                <ol>
                    {
                        this.state.name.map((item, index) => {
                            return <li key={index + item}>{item}</li>
                        })
                    }
                </ol>
            </Fragment >
        )
    }
    inputChang(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            name: [...this.state.name, this.state.inputValue],
            inputValue: ""

        })

    }

}


console.log("魏亦良練習場")

export default Abctest