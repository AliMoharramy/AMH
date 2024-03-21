const { db } = require("@vercel/postgres");
const { Tasks } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedTasks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Tasks" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    task_id UUID NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    rank VARCHAR(2) NOT NULL,
    duration VARCHAR(7) NOT NULL,
    start VARCHAR(5) NOT NULL,
    endtime VARCHAR(5) NOT NULL
  );
`;

    console.log(`Created "tasks" table`);

    // Insert data into the "Tasks" table
    const insertedTasks = await Promise.all(
      Tasks.map(
        (task) => client.sql`
        INSERT INTO tasks (task_id, title, description, rank, duration, start, endtime)
        VALUES (${task.task_id}, ${task.title}, ${task.description}, ${task.rank}, ${task.duration}, ${task.start}, ${task.endtime})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedTasks.length} tasks`);

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
