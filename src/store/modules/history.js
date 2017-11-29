const history = {
    state: {
        history: []
    },
    getters: {
        History(state){
            return state.history;
        }
    },
    mutations: {
        updateHistory(state, payload){
            state.history = payload;
        }
    },
    actions: {
        fetchDataHistory({ rootGetters, commit }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/drc8b')
                .then(response => {
                    commit('updateHostory', response.body)
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default history;