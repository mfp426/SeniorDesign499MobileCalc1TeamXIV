import PropTypes from "prop-types";
import React from 'react';

const CategoryCard = React.memo(({navigationItem, imgSrc, categoryName}) => {
    return (
        <div className={"cursor-pointer"}>
            <a onClick={navigationItem}>
                <div className="rounded overflow-hidden shadow-lg">
                    <img className= "object-cover w-full" src={imgSrc} alt="Category Icon" />
                    <figcaption>
                        <div className="font-bold text-center mb-2">{categoryName}</div>
                    </figcaption>
                </div>
            </a>
        </div>
    );
});

CategoryCard.propTypes = {
    navigationItem: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
};

export default CategoryCard;