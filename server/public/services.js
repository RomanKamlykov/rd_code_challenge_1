const api = {
    records: '/api/records'
}
const services = {
    async uploadFile(file) {
        try {
            let formData = new FormData();
            formData.append("file", file);
            await axios.post(api.records, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
    },
    async requestData() {
        try {
            const { data } = await axios.get(api.records);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteData() {
        try {
            await axios.delete(api.records);
        } catch (error) {
            console.log(error);
        }
    }
};