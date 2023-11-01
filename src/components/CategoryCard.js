import React from 'react';

function CategoryCard({ navigationItem, imgSrc, categoryName }) {
    const handleNavigation = () => {
        navigationItem();
    };

    return (
        <div className={"cursor-pointer"}>
            <button onClick={handleNavigation} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="object-cover w-full" src={imgSrc} alt="Category Icon" />
                    <figcaption>
                        <div className="font-bold text-center mb-2">{categoryName}</div>
                    </figcaption>
                </div>
            </button>
        </div>
    );
}

export default CategoryCard;