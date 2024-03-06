const md5 = require('md5')
module.exports = {
    async beforeCreate(event) {
        console.log('beforeCreate is work', event.params.data);
        event.params.data.student_id = 'yxz'
        // const data = md5(event.params.data);
    }
}