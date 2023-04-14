import React from 'react';
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {

    const currentuser = {
        id: 1,
        username: "James Smith",
        isSeller: true,
    };

    const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt hic aliquam maiores necessitatibus repellat placeat ducimus doloremque ipsam ratione cupiditate architecto velit iusto perspiciatis a incidunt ab, praesentium officia quibusdam.`;

    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                   
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    
                    <tr className="active">
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>  
                    <tr className="active">
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>2 day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>3 day ago</td>
                        
                    </tr>      
                    <tr>
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>4 day ago</td>
                       
                    </tr>  
                    <tr>
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>4 day ago</td>
                       
                    </tr> 
                    <tr>
                        <td>
                            James Smith
                        </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td><td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>4 day ago</td>
                       
                    </tr> 
                    
                               
                </table>
            </div>
        </div>
    )
}

export default Messages;