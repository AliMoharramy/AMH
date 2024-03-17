const { db } = require("@vercel/postgres");
const { Tasks } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedTasks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Tasks" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS Tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    task_id UUID NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT(20000) NOT NULL,
    rank CHAR(2) NOT NULL,
    duration VARCHAR(7) NOT NULL,
    start VARCHAR(5) NOT NULL,
    end VARCHAR(5) NOT NULL,
  );
`;

    console.log(`Created "Tasks" table`);

    // Insert data into the "Tasks" table
    const insertedTasks = await Promise.all(
      Tasks.map(
        (task) => client.sql`
        INSERT INTO Tasks (task_id, title, description, rank, duration, start, end)
        VALUES (${task.task_id}, ${task.title}, ${task.description}, ${task.rank}, ${task.duration}, ${task.start}, ${task.end})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedTasks.length} Tasks`);

    return {
      createTable,
      Tasks: insertedTasks,
    };
  } catch (error) {
    console.error("Error seeding Tasks:", error);
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
