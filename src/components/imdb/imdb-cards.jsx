import React from 'react';


class IMDBCards extends React.Component {

    state = {
        item: this.props.cardInfo,
        id: this.props.cardInfo.imdbID,
        response: false,
        
    }
    
    handleClick = (e) =>{
        this.props.clickCard(e, this.state.id, this.state.item.Poster)
    }

    render() {
        return (
            <div className='ml-2 mr-2 mt-2 mb-2'>
                <div className="card" style={{ width: '18rem' }} onClick={this.handleClick.bind(this)}>
                <img src={this.state.item.Poster === 'N/A' ? 'https://i1.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1' : this.state.item.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.state.item.Title}</h5>
                </div>
            </div>
            </div>


        )
    }
}

export default IMDBCards;

