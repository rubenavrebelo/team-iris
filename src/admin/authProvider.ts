export const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }: any) =>  {
        const request = new Request('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                console.log(request);
                localStorage.setItem('token', token);
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: any) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject({ redirectTo: '/login' });
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};