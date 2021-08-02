export const createProject = (project) =>{
    console.log("data:",project)
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname:'net',
            authorLastname:'ninja',
            authorId:12345,
            createdAt:new Date()
        }).then(()=>{
            dispatch({
                type:'CREATE_PROJECT',
                project
            })
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error})
        })
    }
}