const { db } = require("@vercel/postgres");
const { Tasks } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedTasks(client) {
  console.log(Tasks);
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Tasks" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    task_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    rank VARCHAR(2) NOT NULL,
    duration VARCHAR(7) NOT NULL,
    start VARCHAR(5) NOT NULL,
    endtime VARCHAR(5) NOT NULL
  );
`;
    // Insert data into the "Tasks" table
    const insertedTasks = await Promise.all(
      Tasks.forEach(
        (task) => client.sql`
        INSERT INTO tasks (task_id, title, description, rank, duration, start, endtime)
        VALUES (${task.task_id}, ${task.title}, ${task.description}, ${task.rank}, ${task.duration}, ${task.start}, ${task.endtime})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    return {
      createTable,
      Tasks: insertedTasks,
    };
  } catch (error) {
    console.error("Error seeding tasks:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedTasks(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});

//products part
// `CREATE TABLE IF NOT EXISTS products (
//   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//   product_id INT NOT NULL,
//   name VARCHAR(50) NOT NULL,
//   size VARCHAR(40) NOT NULL,
//   cost VARCHAR(10) NOT NULL,
//   img TEXT NOT NULL
// );`;
//-----------------
// `INSERT INTO products (product_id, name, size, cost, img)
// VALUES (4, 'TN 657', '100 × 65 cm', '$5,398.81', 'require("../../../public/paint4.webp")');`;
