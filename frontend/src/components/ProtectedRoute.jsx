import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import api from '../api';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants';
import {useState, useEffect} from 'react';

function ProtectedRoute({children}) {
    // default value of isAuthorized is null
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    //refresh the refresh token automatically
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            //set a request to the server/backend to get a new access token
            const response = await api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });
            // if the response is successful, store the new access token
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    // check if we need to refresh the token
    const auth = async() => {
        //check if the token existed
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        // decode the token and check if the token is expired
        const decoded = jwtDecode(token);
        const tokenExp = decoded.exp;
        //date in seconds
        const currentTime = Date.now() / 1000;
        // if the token is expired, refresh the token
        if (tokenExp < currentTime) {
            await refreshToken();
        }else{
            setIsAuthorized(true);
        }
    };

    if(isAuthorized === null){
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />

}

export default ProtectedRoute;