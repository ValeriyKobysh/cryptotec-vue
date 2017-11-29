const profile = {
    state: {
        profileData: []
    },
    getters: {
        ProfileData(state){
            return state.profileData;
        }
    },
    mutations: {
        updateProfileData(state, payload){
            state.profileData = payload;
        }
    },
    actions: {
        fetchProfileData({ rootGetters, commit }){
            const { $http } = rootGetters;

            $http.get('https://api.myjson.com/bins/zy5y3')
                .then(response => {
                    commit('updateProfileData', response.body)
                }, error => {
                    console.log(error);
                })
        }
    }
}

export default profile;