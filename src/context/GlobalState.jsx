import React, {useState, createContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const GlobalContext = createContext(null);

function GlobalState({children}) {

    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])

    const navigate = useNavigate()

        async function fetchRecipes(search = "pasta") { // "pasta" is a default search term
        try {
            setLoading(true);
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=b507eee2-d232-45e5-b5fa-36123e993f39`
            );
            const data = await response.json();
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Fetch default recipes when component mounts
    useEffect(() => {
        fetchRecipes(); // Fetches recipes with the default search term
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=b507eee2-d232-45e5-b5fa-36123e993f39`
            );

            const data = await response.json();
            if (data?.data?.recipes){
                setRecipeList(data.data.recipes);
                setLoading(false);
                setSearchParam("")
                navigate("/")
            }
        }catch (error) {
            console.log(error);
            setLoading(false);
            setSearchParam("");
        }
    }

    function handleAddFavorite(getCurrentItem) {
        let copyFavoritesList = [...favoritesList];
        const index = copyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)
        if(index === -1) {
            copyFavoritesList.push(getCurrentItem);
        }else{
            copyFavoritesList.splice(index);
        }

        setFavoritesList(copyFavoritesList)
    }

    return (
    <GlobalContext.Provider
        value={{
            searchParam,
            setSearchParam,
            handleSubmit,
            recipeList,
            loading,
            recipeDetailsData,
            setRecipeDetailsData,
            favoritesList,
            handleAddFavorite,
    }}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalState;