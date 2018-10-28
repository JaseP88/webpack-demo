import React, { Component } from 'react';

class AppList extends Component {
    render() {
        return (
            <div>
                <uL>
                    <li className="List-first" >First Item</li>
                    <li className="List-second" >Second Item</li>
                    <li className="List-third" >Third Item</li>
                    <li className="List-fourth" >Fourth Item</li>
                </uL>
            </div>
        );
    }
}

export default AppList;