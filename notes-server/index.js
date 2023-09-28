require('dotenv').config()
const { Sequelize, QueryTypes } = require('sequelize')

const express = require('express')
const app = express()

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});


app.get('/api/blogs', async (req, res) => {
  const blogs = await sequelize.query("SELECT * FROM blogs", { type: QueryTypes.SELECT })
  res.json(blogs)
})
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.post('/api/blogs', async (req, res) => {
  const { author, url, title, likes } = req.body;
  res.json(req.body);
  
})