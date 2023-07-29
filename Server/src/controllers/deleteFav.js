const { Favorite } = require("../DB_connection")

const deleteFav = async (req, res) => {
    const { id } = req.params;

    try {
        await Favorite.destroy({ where: { id } })
        const favorites = await Favorite.findAll();
        return res.json(favorites);
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
    deleteFav
}