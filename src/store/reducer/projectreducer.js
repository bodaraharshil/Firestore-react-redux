const initstate = {
    projects:[
        {id:'1',title:'t1',content:'c1'},
        {id:'2',title:'t2',content:'c2'},
        {id:'3',title:'t3',content:'c3'},
    ]
}

const Projectreducer = (state = initstate,action) =>
{
    switch(action.type)
    {
        case 'CREATE_PROJECT':
            console.log("create project",action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.error)
            return state;  
        default:
            return state;
    }
}

export default Projectreducer