import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from "../redux/userSlice.js";
import User from '../components/User.jsx';
import Account from "../../src/components/Account.jsx";
import AccountCardData from "../data/AccountCardData.json";

/* User profile page */
function UserProfile() {
    const token = useSelector((state) => state.auth.token) || sessionStorage.getItem('token') || localStorage.getItem('token');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* Asynchronous function that retrieves user data and updates it with useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        /* 
                            Checking that the query response is indeed retrieved
                            console.log(data) 
                        */
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        /* Return user data in redux state */
                        dispatch(getUserProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        } else {
            navigate('/login');  // Redirige vers la page de connexion si le token n'est pas présent
        }
    }, [dispatch, token, navigate]);

    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                {/* Return user component */}
                <User />
                {/* Return items from json file with map */}
                {AccountCardData.map((data) => (
                    /* Return account component */
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default UserProfile;