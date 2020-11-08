import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        // retrieve data saved in token
        return decode(this.getToken());
    }

    loggedIn() {
        // checks if the user is still logged in
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        // returns a boolean value for weather a token is expired
        try {
            const decoded = decode(token);

            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // retrieves saved token from localstorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // setting token in localstorage for future use 
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        // remove token so user doesn't have multiple tokens when they log back in 
        localStorage.removeItem('id_token');

        window.location.assign('/');
    }
}

export default new AuthService();