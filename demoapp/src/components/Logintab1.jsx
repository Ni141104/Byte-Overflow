import './Logintab1.css';
function Logintab1({setTab}) {
    return (
        <div className='loginTab'>
            <div>
                <span>Username: </span>
                <input type='text'></input>
            </div>
            <div >
                <span>Password: </span>
                <input type='password'></input>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
            <p onClick={()=> setTab("SignIn")}>New User?</p>
        </div>
    )
}
export default Logintab1;