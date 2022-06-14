import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './Pickle.scss';

const Pickles = () => {
    const [pickles, setPickles] = React.useState([]);
    const isAdmin = JSON.parse(localStorage.getItem('user'));

    React.useEffect(() => {
        getPickles();
    }, [])

    const getPickles = async () => {
        const recipesResponse = await axios.get('/pickle/all')
        setPickles(recipesResponse.data.content);
    }

    const deletePickle = async id => {
        await axios.delete(`/pickle/${id}`);
        getPickles();
    }

    return(
        <div className={'Recipes'}>
            <p style={{fontSize: 30}}>Рейтинг по общественной деятельности</p>
            {/* {JSON.parse(localStorage.getItem('user')).role === 'ADMIN' && <Link style={{textDecoration: 'none', color: 'green'}} to={'/pickle/add'}>Добавить соленье</Link>}
            {pickles.map(recipe => {
                return( */}
                <div className={'Recipes__recipeBlock'} >
                <table bordercolor="black" rules="rows" width="100%">
                <tr>
                                                        <td>Номер</td>
                                                        <td>ФИО</td>
                                                        <td>Группа</td>
                                                        <td>Баллы</td>
                                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Студент №1</td>
                                        <td>БПИ18-01</td>
                                        <td>50</td>
                                        </tr>
                                        <tr>
                                                                                <td>2</td>
                                                                                <td>Студент №2</td>
                                                                                <td>БИС18-01</td>
                                                                                <td>43</td>
                                                                                </tr>
                                                                                <tr>
                                                                                                                        <td>3</td>
                                                                                                                        <td>Студент №3</td>
                                                                                                                        <td>БИА18-01</td>
                                                                                                                        <td>20</td>
                                                                                                                        </tr>
                                        </table>
                    {/* <img src={axios.defaults.baseURL + `file/${recipe.photo.uuid}`} className={'Recipes__image'} />
                    <div style={{position: 'relative', width: '60%'}}>
                        <Link to={`/pickle/${recipe.id}`} style={{textDecoration: 'none', color: 'green'}} className={'Recipes__title'}>{recipe.name}</Link>
                        {isAdmin && <Link to={`/pickle/${recipe.id}/edit`}><img style={{position: 'absolute', top: 0, right: 40}} src="https://img.icons8.com/ios/30/000000/edit--v1.png"/></Link>}
                        {isAdmin && <img onClick={() => deletePickle(recipe.id)} style={{position: 'absolute', top: 0, right: 0, zIndex: 10}} src="https://img.icons8.com/wired/30/000000/filled-trash.png"/>}
                    </div> */}
                </div>{/* ); */}
            {/* })} */}
        </div>
    )
}

export default Pickles;
