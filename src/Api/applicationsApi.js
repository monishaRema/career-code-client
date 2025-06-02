const baseUrl = 'http://localhost:5000/'



const myApplicationsPromise = (email, token) =>{
    return fetch(`${baseUrl}applications?email=${email}`,{
        credentials: 'include',
        headers: {
            authorization: `bearer ${token}`
        }
    } 
)
    .then(res => res.json())
}

const MyPostedJobsPromise = email =>{
    return fetch(`${baseUrl}jobs?email=${email}`).then(res => res.json())
}



export {baseUrl, myApplicationsPromise, MyPostedJobsPromise}