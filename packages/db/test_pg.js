import pg from 'pg';
const { Client } = pg;
const client = new Client({
  connectionString: "postgresql://postgres:12345678@localhost:5432/postgres"
});
client.connect()
  .then(() => {
    console.log("Connected successfully to PostgreSQL!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Connection error:", err.message);
    process.exit(1);
  });
