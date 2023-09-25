import {useNavigate} from "react";

function GradeAndSuperElevation(props){
    const navigate = useNavigate();

    function percentGrade(e){
        navigate('/PercentGradePage')
    }

    function percentSuperelevation(e){
        navigate('/PercentSuperelevation')
    }


    return(
        <div className="container mb-5 center">
            <div className="box justify-content-center">
        
                <form className="was-validated">
                    <h2 className="display-4 page-header mt-3 ml-3 mb-3 d-flex ">Grade and Superelevation</h2>
                
                    <div>
                        <button type="button" class="btn btn-dark" onClick={percentGrade}>Percent grade</button>
                        <br></br><br></br>
                        <button type="button" class="btn btn-dark" onClick={percentSuperelevation}>Percent of superelevation</button>
                        <br></br><br></br>
               

                    </div>



                </form>
            </div>
        </div>
        
    )
}

export default GradeAndSuperElevation;