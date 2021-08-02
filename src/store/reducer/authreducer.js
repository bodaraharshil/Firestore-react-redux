const initstate = {
    authError:null
}

const Authreducer = (state = initstate,action) =>
{
    switch(action.type)
        {
            case 'LOGIN_ERROR':
                console.log("login failed");
            return {
                ...state,
                authError:'login failed'
            }
            case 'LOGIN_SUCCESS':
                console.log("success login");
                return {
                    ...state,
                    authError:null
                }
            case 'SIGNUP_SUCCESS':
                console.log("success signup");
                return {
                    ...state,   
                    authError:null
                }
            case 'SIGNUP_ERROR':
                console.log("signup error");
                return {
                    ...state,
                    authError:action.error.message
                }
            default:
                return state;
    }
}

export default Authreducer