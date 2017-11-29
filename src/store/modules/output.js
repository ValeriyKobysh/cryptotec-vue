const output = {
    state: {
        outputHistory: []
    },
    getters: {
        OutputHistory(state){
            return state.outputHistory;
        }
    },
    mutations: {
        updateOutputHistory(state, payload){
            state.outputHistory = payload;
        }
    },
    actions: {
        fetchDataOutputHistory({ rootGetters, commit }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/yuarf')
                .then(response => {
                    commit('updateOutputHistory', response.body)
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default output;