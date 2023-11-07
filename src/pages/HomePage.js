

function HomePage(props){
    return(
        <h2>Welcome to home</h2>
    );
   
}

// function LoginPage(props) {
//     const [emaillog, setEmaillog] = useState(" ");
//     const [passwordlog, setPasswordlog] = useState(" ");

//     const [flag, setFlag] = useState(false);

//     const getDatafromLS=()=>{
//         const data = localStorage.getItem('allUsers');
//         if(data){
//           return JSON.parse(data) || [];
//         }
//         else{
//           return [];
//         }
//       }

//       const navigate = useNavigate();

//       const [users, Setusers] = useState(getDatafromLS());



    

//     function handleLogin(e) {
//         e.preventDefault();

//         for(let i=0;i<users.length;i++){
//             if(passwordlog === users[i].userPassword && emaillog === users[i].userEmail){
            
//                setFlag(false);
//                localStorage.setItem("UserIndex", i);
//                props.toggleState();

//                navigate('/AccountPage');
               
               
//             }
//             else if(passwordlog !== users[i].userPassword && emaillog !== users[i].userEmail){
//                 setFlag(true)
//             }
//             else{
//                 setFlag(true)
//             }


//         }
//       }

    

//     return (<div className='container'>
//         <div>
//         <div className='box justify-content-center'>
            
//             <form onSubmit={handleLogin}>
//                             <h1 className='display-4 page-header mt-3 mb-3 d-flex'>Login</h1>

//                 <div className="mb-3 mt-3">
//                     <label for="uname" className="form-label">Email:</label>
//                     <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => setEmaillog(e.target.value)} required />
//                     <div className="valid-feedback">Valid.</div>
//                     <div className="invalid-feedback">Please fill out this field.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label for="pwd" className="form-label">Password:</label>
//                     <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={e => setPasswordlog(e.target.value)} required />
//                     <div className="valid-feedback">Valid.</div>
//                     <div className="invalid-feedback">Please fill out this field.</div>
//                 </div>
//                 <button type="submit" className="btn btn-primary mt-4">Log in </button>
                
//                 {flag && (
                    
//                 <div class="alert alert-danger" role="alert">
//                 <span>Account Details don't match!</span>
//               </div>           
//                     )}
                

//             </form>
            
            
//         </div>
//     </div>
    
// </div>
//     );
// }

export default HomePage;