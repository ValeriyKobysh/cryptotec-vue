const referals = {
    state: {
        referals: {}
    },
    getters: {
        Referals(state){
            return state.referals;
        }
    },
    mutations: {
        updateReferals(state, payload){
            state.referals = payload;
        }
    },
    actions: {
        fetchDataReferals({ rootGetters, commit, dispatch }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/drc8b')
                .then(response => {
                    commit('updateReferals', response.body)
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default referals;