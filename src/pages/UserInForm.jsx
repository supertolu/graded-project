import { useState } from "react";


function UserInForm() {
    const [userName, setUserName] = useState({
        userName: "",
        email: "",
        userRole: "",
});

// creat a submit handler function to handle the form submission
const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission logic here
    await fetch('http://localhost:5000/submit', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(formData)});
    
};

return (
    <form onSubmit={handleSubmit}>

            <input type="text" placeholder='User Name'  onChange={(event)=> setFormData({...formData, userName: event.target.value})}/>
            <input type="email" placeholder='User Email' onChange={(event)=> setFormData({...formData, email: event.target.value})} />
            <input type="text" placeholder='User Role' onChange={(event)=> setFormData({...formData, userRole: event.target.value})} />
            <button type="submit">Submit</button>
        </form>
)
}


    

export default UserInForm;