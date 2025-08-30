// This file manages authentication-related functionality, including the logic for Google account login and handling user sessions.

function initGoogleAuth() {
    gapi.load('client:auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
            scope: 'profile email'
        }).then(() => {
            attachSignin(document.getElementById('googleSignIn'));
        });
    });
}

function attachSignin(element) {
    auth2.attachClickHandler(element, {}, onSuccess, onFailure);
}

function onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    const userData = {
        id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl()
    };
    // Handle successful login (e.g., send userData to server or store in local storage)
    console.log('User signed in:', userData);
}

function onFailure(error) {
    console.error('Error signing in:', error);
}

// Call initGoogleAuth when the window loads
window.onload = function() {
    initGoogleAuth();
};