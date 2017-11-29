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
                    return Promise(resolved => {
                        if(response.body.status){
                            resolved();
                        }
                    })
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default auth;