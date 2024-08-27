import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import RecipeItem from "../../components/recipe/recipe-item";

function Home(props) {
    const {recipeList, loading} = useContext(GlobalContext)

    if (loading) return <h1>Loading... Please wait</h1>



    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {recipeList && recipeList.length > 0 ? (

                    recipeList.map((item) => <RecipeItem key={item.id} item={item}/>))
                    : (<div>
                        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                            No Recipe Found
                        </p>
                    </div>)

            }
        </div>
    );
}

export default Home;