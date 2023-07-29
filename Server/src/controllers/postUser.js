const { User } = require("../DB_connection")

async function postUser(req, res) {
    const { password, email } = req.body;

    try {
        if (!email || !password || email.trim() === '' || password.trim() === '') {
            return res.status(400).json({ message: "Faltan datos" });
        }
        const user = await User.findOrCreate({ where: { email }, defaults: { password } });
        return res.json(user);
    } catch (error) {
            return res.status(500).json(error.message);
        }
}


module.exports = {
    postUser
};