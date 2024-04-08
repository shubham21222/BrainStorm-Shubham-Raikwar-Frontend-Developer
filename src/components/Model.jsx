import React, { useRef, useEffect } from 'react';

const Modal = ({ meal, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!meal) return null;

    const { strMeal, strCategory, strArea, strYoutube, strTags, strMealThumb } = meal;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div ref={modalRef} className="modal-content bg-white p-6 rounded-lg z-50 w-full max-w-2xl mx-4 sm:mx-auto">
                <button className="modal-close absolute top-0 right-0 mt-2 mr-2 text-2xl cursor-pointer" onClick={onClose}>×</button>
                <h2 className="text-xl font-bold mb-4">{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} className="w-full h-[450px] mb-4 rounded-lg" />
                <p><strong>Category:</strong> {strCategory}</p>
                <p><strong>Area:</strong> {strArea}</p>
                <p><strong>YouTube Link:</strong> <a href={strYoutube} target="_blank" rel="noopener noreferrer">{strYoutube}</a></p>
                <p><strong>Tags:</strong> {strTags}</p>
            </div>
        </div>
    );
}

export default Modal;
