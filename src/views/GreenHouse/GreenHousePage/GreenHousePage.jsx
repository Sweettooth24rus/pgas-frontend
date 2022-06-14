import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import './GreenHousePage.scss';

const GreenHousePage = () => {
    const {houseId} = useParams();
    const [recipe, setRecipe] = React.useState(null)

    React.useEffect(() => {
        getRecipeInfo()
    }, [])

    const getRecipeInfo = async () => {
        setRecipe((await axios.get(`/greenhouse/${houseId}`)).data);
    };

    if (recipe){
        return(
            <div className={'Recipe'}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img src={axios.defaults.baseURL + `file/${recipe.photo.uuid}`} className={'Recipe__image'} />
                    <div>
                        <p className={'Recipe__title'}>{recipe.name}</p>
                        <p>Материалы: {recipe.materials}</p>
                    </div>
                </div>
                <p className={'Recipe__title'} style={{marginLeft: 30}}>Описание:</p>
                <p>{recipe.description}</p>
            </div>
        )
    }

    return null;
}

export default GreenHousePage;
