import React from 'react'

 function Team (props) {
     console.log(props)
    return(
        <div className = "team">
            {props.teamMembers.map(member=> (
                <div className ="member" key ={member.id}>
                    <h2>{member.username}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
             ))}
        </div>
    )
}
export default Team;
