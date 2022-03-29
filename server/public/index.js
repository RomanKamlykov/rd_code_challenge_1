const app = new Vue({ 
    el: '#app',
    data() {
        return {
            items: []
        }
    },
    methods: {
        async requestDataFromServer() {
            this.items = await services.requestData();
        },
        async uploadFileToServer(event) {
            await services.uploadFile(event.target.files[0]);
            event.target.value = null;
            await this.requestDataFromServer();
        },
        async deleteDataOnServer() {
            await services.deleteData();
            this.items = [];
        }
    },
    mounted() {
        this.requestDataFromServer();
    }
});