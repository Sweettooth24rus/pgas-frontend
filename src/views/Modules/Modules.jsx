import { Switch } from "@mui/material";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './Modules.scss';

const Modules = () => {
    const [modules, setModules] = React.useState(null);

    React.useEffect(() => {
        getModules();
    }, []) 

    const getModules = async () => {
        setModules((await axios.get('/modules/all')).data);
    }

    const switchActivity = id => {
        axios.put(`/modules/activity/${id}`)
        setModules(modules.map(item => {
            if (item.id === id){
                return {...item, activity: !item.activity}
            }

            return item;
        }))
    }

    if (modules){
        return(
            <div className={'Modules'}>
                <p className={'Modules__title'}>Личный кабинет</p>
                <TextField className="Register__input" label="Номер зачётной книжки" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Старый пароль" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Новый пароль" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Имя" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Фамилия" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Отчество" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Email" variant="outlined" />
                                <TextField className="Register__input" id="outlined-basic" label="Группа" variant="outlined" />
                                <Button type="submit" className="Register__button" variant="contained">Сохранить</Button>
                {/* {modules.map(module => {
                    if (module.activity || JSON.parse(localStorage.getItem('user')).role === 'ADMIN')
                    return (
                        <div className={'Modules__moduleBlock'}>
                            <Link to={`/modules/${module.name}`} style={{textDecoration: 'none', color: 'black'}}>{module.name}</Link>
                            {JSON.parse(localStorage.getItem('user')).role === 'ADMIN' && <Switch onClick={() => switchActivity(module.id)} checked={module.activity} />}
                        </div>
                    );
                })} */}
            </div>
        )
    }

    return null;
    
}

export default Modules;
