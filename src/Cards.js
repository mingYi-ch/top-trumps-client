import React from "react";

class Cards extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="cards">
                <tr>
                    <th>Player's Card</th>
                    <th>Computer's Card</th>
                </tr>
                <tr>
                    <td>
                        <div className="card">
                            <div className="moviePicture">
                                [Movie Poster]
                            </div>
                            <div>Rating: </div>
                            <div>Awards won:</div>
                            <div>Revenue:</div>
                            <div>Duration:</div>
                            <div>Director rating:</div>
                        </div>
                    </td>
                    <td>
                        <div className="card">
                            <div className="moviePicture">
                                [Movie Poster]
                            </div>
                            <div>Rating: </div>
                            <div>Awards won:</div>
                            <div>Revenue:</div>
                            <div>Duration:</div>
                            <div>Director rating:</div>
                        </div>
                    </td>
                </tr>
            </table>
        );
    }
}

export default Cards;
