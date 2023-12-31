require("dotenv").config();

const { Sequelize, QueryTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const main = async () => {
  try {
    // await sequelize.authenticate();

    const blogs = await sequelize.query("SELECT * FROM blogs", {
      type: QueryTypes.SELECT,
    });
    blogs.map((blogs) => {
      console.log(`${blogs.author}:'${blogs.title}' ${blogs.likes} like `);
    });
    sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
