import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../List/List';
import Loading from '../Loading/Loading';
import AddNew from '../AddNew/AddNew';

const HOST_API = 'http://localhost:8080/api/moto';


const Moto = () => {

    const [motos, setMotos] = useState([]);

    const [loading, setLoading] = useState(false);

    const getDatas = async ()=>{
        setLoading(true);
        const response = await axios.get(HOST_API);
        if(response.status===200){
            setMotos(response.data);
            setLoading(false);
        }
    }

    const saveMoto=(moto) => {
        axios.post(HOST_API, moto)
        .then(response => {
            if(response.status===200){
                alert("Moto guardada...");
                console.log("DATA SAVED! :::");
                getDatas();
            }
        })
        .catch(error => {
            console.log("ERROR: " , error);
        })
    }

    const deleteMoto=(id) => {
        axios.delete(HOST_API + "/" + id)
        .then(response => {
            if(response.status===200){
                alert("Moto eliminada...");
                console.log("DATA DELETED! :::");
                getDatas();
            }
        })
        .catch(error => {
            console.log("ERROR: " , error);
        })
    }


    useEffect(() => {
        getDatas();
    },[]);

    return (
        <div>
            {
                loading ? <Loading></Loading> : <List motos={motos} delete={deleteMoto}/>
            }

            <AddNew sendToSave={saveMoto}/>
        </div>
    )
}

export default Moto
