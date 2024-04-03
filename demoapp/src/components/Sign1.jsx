import Logintab1 from "./Logintab1";
import './Sign1.css';
function Sign1({ setTab }) {
    return (
        <div>
            <div>
                <span>Username:</span>
                <input type="text"></input>
            </div>
            <div>
                <span>Email:</span>
                <input type="email"></input>
            </div>
            <div>
                <span>Password:</span>
                <input type="password"></input>
            </div>
            <div>
                <button>
                    Sign Up
                </button>
            </div>
            <p onClick={() => setTab("LogIn")}>Already Register?</p>
        </div>
    )
};
export default Sign1;