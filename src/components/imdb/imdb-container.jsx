import React from 'react';
import IMDBSearch from './imdb-search'
import IMDBCards from './imdb-cards'
import Example from './example'

class IMDBContainer extends React.Component {

    state = {
        isLoaded: false,
    }

    loadSearch = (e, searchValue) => {
        this.setState({ response: false }, () => {
            fetch(`https://omdbapi.com/?s=${searchValue}&apikey=21af947d`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        this.setState({
                            isLoaded: true,
                            items: result.Search,
                            response: result.Response,
                            searched: searchValue,
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: false,
                            error
                        });
                    }
                )
        })
    }

    handleClickFromChild = (e, id, poster) => {
        this.setState({ responseModal: false }, () => {
            fetch(`https://omdbapi.com/?i=${id}&apikey=21af947d`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        this.setState({
                            isLoaded: true,
                            itemsModal: result,
                            responseModal: true,
                            poster: poster
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: false,
                            error
                        });
                    }
                )
        })
    }

    handleCloseFromChild = (e) => {
        this.setState({ responseModal: false })
    }



    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <IMDBSearch searchFunc={this.loadSearch} />
                </div>
                <div className="row">
                    {this.state.response === "True" ? this.state.items.map((item, index) => {
                        return <IMDBCards key={index} cardInfo={item} clickCard={this.handleClickFromChild}/>
                    }) : this.state.response === 'False' ? `Movie ${this.state.searched} wasn't found` : null}

                </div>
                {this.state.responseModal ?<Example show={true} poster={this.state.poster === 'N/A' ? 'https://i1.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1' : this.state.poster} modalInfo={this.state.itemsModal} modalFunc={this.handleCloseFromChild.bind(this)}/> : null}
            </div>
        )
    }
}

export default IMDBContainer;
