import React, { useState, useEffect } from 'react';
import Card from './Card';
import FilterSection from './FilterSection';
import Modal from './Model'; 

const Main = () => {
    const [meals, setMeals] = useState([]);
    const [selectedArea, setSelectedArea] = useState('Indian');
    const [sortBy, setSortBy] = useState('');
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMealDetails, setModalMealDetails] = useState(null); // State to store detailed meal information for the modal

    const fetchMeals = async (area) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            const { meals } = await response.json();
            setMeals(meals);
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    }

    const fetchMealDetails = async (mealId) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const { meals } = await response.json();
            setModalMealDetails(meals[0]); // Assuming there is only one meal returned
        } catch (error) {
            console.error("Error fetching meal details:", error);
        }
    }

    useEffect(() => {   
        fetchMeals(selectedArea);
    }, [selectedArea]);

    useEffect(() => {
        if (selectedMeal) {
            fetchMealDetails(selectedMeal.idMeal);
            setIsModalOpen(true);
        }
    }, [selectedMeal]);

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
    };

    return (
        <div className='max-w-[1450px] mx-auto'>
            {/* Header */}
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold max-w-[1250px] ml-8'>
                    Restaurants with online food delivery in Pune
                </div>
            </div>
            {/* Filter Section */}
            <FilterSection setSelectedArea={setSelectedArea} onSortChange={handleSortChange} />
            {/* Display Meals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-4">
                {meals.map((meal, index) => (
                    <div key={index} className="flex justify-center">
                        <Card meal={meal} onClick={() => handleMealClick(meal)} />
                    </div>
                ))}
            </div>
            {/* Modal */}
            {isModalOpen && <Modal meal={modalMealDetails} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Main;
