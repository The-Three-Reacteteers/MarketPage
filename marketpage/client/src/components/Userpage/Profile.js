import React from 'react';
import Card from 'react-bootstrap/card';

const Profile = () => {
    return (
        <Card>
            <Card.Header className="profile-title">Welcome, User!</Card.Header>
            <Card.Body>
                <Card.Text className="profile-text">
                    Welcome back to MarketPage!
                    <br></br>
                    Use the navigation above to check out your collection and wishlist!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Profile
