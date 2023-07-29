const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;
  
    if (!id || !name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: 'Faltan datos' });
    }
  
    try {
      const [favorite, created] = await Favorite.findOrCreate({
        where: { id },
        defaults: { name, origin, status, image, species, gender },
      });
  
      const favorites = await Favorite.findAll();
      return res.json(favorites);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };


module.exports = {
    postFav
}