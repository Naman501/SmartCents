require('dotenv').config();

console.log('✅ DATABASE_URL:', process.env.DATABASE_URL);

module.exports = {
  schema: './utils/schema.js',
//   schema: { default: require('./utils/schema.js') },
  dialect: "postgresql",
  out: './drizzle',
  adapter: 'pg', // ✅ for drizzle-kit >= 0.20.0
  dbCredentials: {
    url: process.env.DATABASE_URL, // ✅ must be `url`, not `connectionString`
  },
};
