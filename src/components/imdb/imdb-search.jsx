import React from 'react';


class IMDBSearch extends React.Component {
    state = {}

    handleChange = (e) => {
        console.log('Change')
        this.setState({searchValue: e.target.value})
    }

    handleClick = (e) => {
        this.props.searchFunc(e, this.state.searchValue)
    }

    render() {
        return (
            <div className="row">
                <input onChange={this.handleChange.bind(this)} type="text" placeholder='Search' name='usersearch' />
                <div onClick={this.handleClick.bind(this)} className="btn btn-success" >Search</div>
            </div>
        )
    }

}

export default IMDBSearch;
