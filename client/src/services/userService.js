// inspired by http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
export const userService = {
    login,
    logout,
    lock,
    register,
    unlock,
    getReservations,
    loan
}

/*
    This folder encapsulates all the functions we need for user-related network requests. Pulling them out into here
    just helps for reusability.
*/

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return fetch('/api/user', requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user[0] !== undefined) {
                localStorage.setItem('user', JSON.stringify(user[0]));
                return user[0];
            } else {
                throw new Error("Invalid login details");
            }

        
        });
}

function logout() {
    // just remove user from local storage
    localStorage.removeItem('user');
}

function register(email, phone, firstName, lastName, password) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phone, firstName, lastName, password })
    }

    return fetch('/api/user', requestOptions)
        .then(handleResponse)
}

function lock(itemLocation, customer) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            locationID: itemLocation.LID,
            customerID: customer.CID
         })
    }

    return fetch('/api/lock', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log(response);
            return response;
        })
}

function unlock(EID) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ EID })
    }

    return fetch('/api/unlock', requestOptions)
        .then(handleResponse)
        .then(message => {
            return {
                message
            }
        });
}

function getReservations(CID) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return fetch(`/api/reservation/${CID}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return {
                reservations: response.reservations
            }
        });
}

function loan(CID, EID, LID) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            customerID: CID,
            equipmentID: EID,
            locationID: LID
        })
    }

    return fetch('/api/loan', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log(response);
            return response;
        })
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            // may need to look at what response data looks like
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        return data;
    })
}