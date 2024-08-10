import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from "../redux/userSlice.js";
import User from '../components/User.jsx';
import Account from "../../src/components/Account.jsx";
import AccountCardData from "../data/AccountCardData.json";

/* User profile page */
function UserProfile() {
    // Retrieve token from Redux state or sessionStorage
    const token = useSelector((state) => state.auth.token) || sessionStorage.getItem('token');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // If a token is present, fetch user data
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
                        console.log('User data retrieved:', data); // Debug log
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        };
                        // Dispatch user data to Redux store
                        dispatch(getUserProfile(userData));
                    } else {
                        console.log("Error while retrieving profile");
                        navigate('/login');
                    }
                } catch (error) {
                    console.error(error);
                    navigate('/login');
                };
            };
            userData();
        } else {
            // Redirect to login page if token is not present
            navigate('/login');
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