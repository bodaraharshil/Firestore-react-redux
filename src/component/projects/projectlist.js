import React from 'react';
import Projectummary from './projectsummary';
import { Link } from 'react-router-dom';

const Projectlist = ({projects}) => {
    return (
        <div className="project-list section">
            {
                projects && projects.map(item=>{
                    return (
                    <Link to={"/project/"+item.id}>
                        <Projectummary item={item}/>
                    </Link>
                    )
                })
            }
        </div>
    )
}

export default Projectlist
