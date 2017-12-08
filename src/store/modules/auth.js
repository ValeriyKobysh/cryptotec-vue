const auth = {
    state: {
        auth: {}
    },
    getters: {
        Auth(state) { 
            return state.auth
        }
    },
    mutations: {
        updateStatus(state, payload){
            state.auth = payload; 
        }
    },
    actions: {
        fetchStatusSession({ rootGetters, commit }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/cs6sr')
                .then(response => {
                    commit('updateStatus', response.body);
                    return new Promise(resolved => {
                        if(response.body.status){
                            resolved();
                        }
                    })
                }, error => {
                    console.log(error);
                })
        },
        newUser({ rootGetters }, data)
        {
            const { $http } = rootGetters;

            $http.post('/index.php?p1=/registration/', data, { emulateJSON: true})
                .then(response => 
                {
                    console.log(response);
                }), error => 
                {
                    console.log(error);
                }
        },
        loginUser({ rootGetters }, data)
        {
            const { $http } = rootGetters;

            $http.post('/index.php?p1=/login/', data, { emulateJSON: true})
                .then(response => 
                {
                    console.log(response);
                }), error => 
                {
                    console.log(error);
                }
        },
        RecoveryPassword({ rootGetters }, data)
        {
            const { $http } = rootGetters;

            $http.post('/index.php?p1=/recovery/', data, { emulateJSON: true})
                .then(response => 
                {
                    console.log(response);
                }), error => 
                {
                    console.log(error);
                }
        }
    }
}

export default auth;