import * as client from "./client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate , useParams} from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };    
    const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
        }, []);  
    const save = async () => {
        await client.updateUser(account);
    };
    return (
        <div className="w-50">
        <h1>Account</h1>
        {account && (
            <div>
            <input className="form-control w-50 mb-1"  value={account.password}
                onChange={(e) => setAccount({ ...account,
                password: e.target.value })}/>
            <input className="form-control w-50 mb-1"  value={account.firstName}
                onChange={(e) => setAccount({ ...account,
                firstName: e.target.value })}/>
            <input className="form-control w-50 mb-1" value={account.lastName}
                onChange={(e) => setAccount({ ...account,
                lastName: e.target.value })}/>
            <input className="form-control w-50 mb-1" value={account.dob}
                onChange={(e) => setAccount({ ...account,
                dob: e.target.value })}/>
            <input className="form-control w-50 mb-1" value={account.email}
                onChange={(e) => setAccount({ ...account,
                email: e.target.value })}/>
            <select className="form-select w-50 mb-1" onChange={(e) => setAccount({ ...account,
                role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            </div>     
        )}
            <button className="btn btn-primary mb-1 w-100" onClick={save}>
                Save
            </button>
            <button className="btn btn-danger mb-1 w-100" onClick={signout}>
                Signout
            </button>
            <Link to="/project/admin/users" className="btn btn-warning w-100">
                Users
            </Link>
        </div>
    );
}
export default Account;