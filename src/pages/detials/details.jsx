import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalState";

function Details() {

    const {id} = useParams()
    const {recipeDetailsData, setRecipeDetailsData, handleAddFavorite, favoritesList} = useContext(GlobalContext)

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=b507eee2-d232-45e5-b5fa-36123e993f39`)
            const data = await response.json()
            if (data?.data) {
                setRecipeDetailsData(data?.data.recipe)
            }
        }

        getRecipeDetails()
    }, [setRecipeDetailsData, id])
    ;
    return (
        <div className="container mx-auto py-10  gap-10">
            <div className="row-start-2 lg:row-start-auto grid grid-cols-1 lg:grid-cols-5">
                <div className="w-96 h-72 overflow-hidden rounded-xl group flex lg:col-span-2">

                    <img
                        src={recipeDetailsData?.image_url}
                        className="w-96 h-72 object-cover rounded-xl block"
                        alt="recipe"/>

                </div>
                <div className="flex flex-col gap-3 lg:col-start-3 lg:col-span-3 ">
                    <span className="text-sm text-cyan-800 font-medium mt-4 ml-3 ">{recipeDetailsData?.publisher}</span>
                    <h3 className="font-bold text-2xl truncate text-black overflow-hidden ml-3">{recipeDetailsData?.title}</h3>
                    <div>
                        <button
                            onClick={() => handleAddFavorite(recipeDetailsData)}
                            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider ml-3 inline shadow-md bg-gray-700 text-white">
                            {
                                favoritesList.findIndex(item => item.id === recipeDetailsData.id) === -1 ? "Add to Favorites" : "Remove from Favorites"
                            }
                        </button>
                    </div>
                    <div>

                        <span className=" ml-3 text-2xl font-semibold"> Ingredients</span>
                        <ul className="flex flex-col gap-3 ml-6 mt-1">
                            {
                                recipeDetailsData?.ingredients.map((ingredient, index) =>
                                    <li key={index}>
                                    <span
                                        className="text-base font-semibold text-black">{ingredient.quantity} {ingredient.unit}</span>
                                        <> </>
                                        <span
                                            className="text-base font-semibold text-black">{ingredient.description}</span>
                                    </li>)
                            }
                        </ul>

                    </div>
                    <div className="mt-1 ml-3">
                        <span className="text-2xl font-semibold ">Servings</span>
                        <p className="text-base font-semibold text-black ml-4 mt-1">{recipeDetailsData?.servings} serves</p>
                    </div>
                    <div className="mt-1 ml-3">
                        <span className="text-2xl font-semibold">Cooking Time</span>
                        <p className="text-base font-semibold text-black ml-4 mt-1">{recipeDetailsData?.cooking_time} mins</p>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Details;