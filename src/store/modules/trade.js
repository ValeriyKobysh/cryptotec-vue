const trade = {
    state: {
        tradePrice: []
    },
    getters: {
        TradePrice(state){
            return state.tradePrice;
        }
    },
    mutations: {
        updateTradePrice(state, payload){
            state.tradePrice = payload;
        }
    },
    actions: {
        fetchDataTrade({ rootGetters, commit, dispatch }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/c50m7')
                .then(response => {
                    commit('updateTradePrice', response.body)
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default trade;