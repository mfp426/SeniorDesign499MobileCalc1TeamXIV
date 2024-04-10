function CarSelectDropdownButton({isDisabled, type, dropdownItems, set}) {

    const getList = () => {
        let arr = []
        for (let i = 0; i < dropdownItems.length; i++) {
            arr.push(<li className="dropdown-item" key={dropdownItems[i]}><button type="button" className='btn btn-small' onClick={() => set(dropdownItems[i])}>{dropdownItems[i]}</button></li>)
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