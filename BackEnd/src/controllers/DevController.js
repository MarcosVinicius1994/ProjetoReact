const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async  store(req, res) {
        const { username } = req.body;


        const user_exists = await  Dev.findOne( { user: username });

        if(user_exists){
            return res.json(user_exists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

   
        return res.json(dev);
    }
};