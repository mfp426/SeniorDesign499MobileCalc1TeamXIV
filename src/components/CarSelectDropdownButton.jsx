import axios from 'axios';

function CarSelectDropdownButton({isDisabled, type, dropdownItems, set, setList, specifiers}) {

    const handleButtonClick = (specifierList) => {
        axios.get("http://localhost:6001/get", {
            params: {
                type: type,
                specifiers: specifierList
            }
        })
            .then(response => {
                if (type !== "Trim") {
                    set(specifierList[specifierList.length - 1])
                    setList(response.data)
                }
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const getList = () => {
        let arr = []

        for (let i = 0; i < dropdownItems.length; i++) {
            let specifier = dropdownItems[i];
            arr.push(<li className="dropdown-item" key={i}><button type="button" className='btn btn-small' onClick={() => {handleButtonClick(specifiers.concat(specifier))}}>{specifier}</button></li>)
        }
        return arr;
    }
    
    return (
        <div className="dropdown" style={{}}>
            <button className="btn dropdown-toggle" type="button" id="make-dropdown" data-bs-toggle="dropdown" disabled={isDisabled}>{type}</button>
            <ul className="dropdown-menu" aria-labelledby="car-dropdown">
                {getList()}
            </ul>
        </div>
    );
}

export default CarSelectDropdownButton;