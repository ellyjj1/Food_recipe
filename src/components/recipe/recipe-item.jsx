import React from 'react';
import {Link} from "react-router-dom";

function RecipeItem(item) {
    return (
        <div className="flex flex-col w-88 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">

                <img
                    src={item?.item.image_url}
                    alt="recipe item"
                    className="block  w-56 h-40 rounded-xl "
                />

            </div>
            <div>
                <span className="text-sm text-cyan-800 font-medium">
                    {item?.item.publisher}
                </span>
                <h3 className="font-bold text-xl truncate text-black overflow-hidden w-56">{item?.item.title}</h3>
                <Link to={`/recipe-item/${item?.item.id}`}
                      className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gray-700 text-white cursor-pointer">
                    Recipe Details</Link>
            </div>
        </div>
    );
}

export default RecipeItem;