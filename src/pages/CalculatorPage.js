import { useNavigate } from 'react-router-dom';
import CategoryCard from "../components/CategoryCard";

function CalculatorPage(props) {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h2 className="display-4 page-header mt-3 mb-3 d-flex ">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <CategoryCard
                    navigationItem={() => navigate('/ConversionPage')}
                    imgSrc="https://picsum.photos/300/300"
                    categoryName="Conversion"
                />
                <CategoryCard
                    navigationItem={() => navigate('/KinEnergyEqvSpeedLGPage')}
                    imgSrc="https://picsum.photos/300/300"
                    categoryName="Kinetic Energy Equivalent Speed Loss/Gain"
                />
                <CategoryCard
                    navigationItem={() => navigate('/GradeAndSuperElevationPage')}
                    imgSrc="https://picsum.photos/300/300"
                    categoryName="Grade and Superelevation"
                />
                <CategoryCard
                    navigationItem={() => navigate('/EDRPage')}
                    imgSrc={"https://picsum.photos/300/300"}
                    categoryName={"EDR"}
                />
                <CategoryCard
                    navigationItem={() => navigate('/ConstUniAvgEquationPage')}
                    imgSrc={"https://picsum.photos/300/300"}
                    categoryName={"Constant, Uniform, or Average Kinematic Equations"}
                />

                <CategoryCard
                    navigationItem={() => navigate('/CenterOfMassEquationPage')}
                    imgSrc={"https://picsum.photos/300/300"}
                    categoryName={"Center of Mass Equations"}
                />
                {/* Add more CategoryCard components as needed */}
            </div>
        </div>
    )
}

export default CalculatorPage;
