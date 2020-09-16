import React, {useState} from 'react';

function Form (props) {
  console.log(props);

  const initialFormValues =  {
    username: '',
    email: '',
    role: '',
  
  };

  const [formValues, setFormValues] = useState(initialFormValues)
  
  const onChange = event =>{
    console.log(event.target.name)
    console.log(event.target.value)
    setFormValues({...formValues,[event.target.name]: event.target.value})
  }
  const onSubmit = event =>{
      event.preventDefault();
      props.setTeamMembers([...props.teamMembers, formValues])
      setFormValues(initialFormValues)

  }
  return (
    <div>
      <form className = "form-container" onSubmit={onSubmit}>
        <label>Username:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChange}
            placeholder = "Enter a username"
          />
        </label><br></br>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder = "Enter your Email"
          />
        </label><br></br>

        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formValues.role}
            onChange={onChange}
            placeholder = "Enter your role"
          />
        </label><br></br>

        <button type  ="submit">Add Team Member</button>
      </form>
    </div>
  )
}

export default Form; 