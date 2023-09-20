import { useNavigate } from 'react-router-dom';


function Calculator(props) {
    
    const navigate = useNavigate();



    function HandelConversion(e) {
        // e.preventDefault();

        // var username = document.getElementById("uname").value;
        // var emailVerify = document.getElementById("email").value;

        // var password = document.getElementById("psw1").value;
        // var confirmPassword = document.getElementById("psw2").value;
        // var phno = document.getElementById("phoneno").value;

        // if (!username || !emailVerify || !password || !phno || password !== confirmPassword) {
        //     alert("Password Doesnot match")
        // } else {
        //     var allUsers = JSON.parse(localStorage.getItem('allUsers') || "[]")
        //     allUsers.push(signupForm)
        //     localStorage.setItem('allUsers', JSON.stringify(allUsers))
        //     const i = users.length;
        //     localStorage.setItem("UserIndex", i);
        //     props.toggleState();
    //   }
            navigate('/ConversionPage');
        
    }

    return (

        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <form className="was-validated">
                    <h2 className="display-4 page-header mt-3 mb-3 d-flex ">Categories</h2>
                    
                    <div>
                    <button className="btn btn-primary" type="button" onClick={HandelConversion}>Conversions</button><br></br><br></br>

                    <button className="btn btn-primary" type="button">Combined Speed</button><br></br><br></br>


      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br> 



      {/* <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br> */}


      </div>


                    {/* <button type="submit" className="btn btn-primary mt-4" onClick={HandleSubmission}>Sign Up</button> */}

                </form>
            </div>
        </div>
    )
}

export default Calculator;