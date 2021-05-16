import React from 'react';

const ProjectDetails = (props) => {

    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit natus voluptas sapiente, ea placeat explicabo laboriosam error amet accusamus nemo distinctio sit doloremque provident pariatur, vel repellat veritatis tempore velit.</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Pooja N G</div>
                <div>16th May, 8pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;