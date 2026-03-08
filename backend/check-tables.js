const pool = require('./db');

async function checkTables() {
  try {
    const res = await pool.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    if (res.rows.length === 0) {
      console.log('❌ NO TABLES FOUND - Need to create schema');
      await createTables();
    } else {
      console.log('✅ Tables found:', res.rows.map(r => r.table_name));
      return;
    }
  } catch (err) {
    console.error('❌ Error checking tables:', err.message);
  }
}

async function createTables() {
  try {
    console.log('Creating tables...');

    // Create rooms table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rooms (
        id SERIAL PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        price INTEGER NOT NULL,
        vacancy INTEGER NOT NULL,
        image VARCHAR(255)
      )
    `);
    console.log('✅ Rooms table created');

    // Create bookings table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        room_type VARCHAR(50) NOT NULL,
        move_in_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Bookings table created');

    // Create admins table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      )
    `);
    console.log('✅ Admins table created');

    // Insert sample rooms
    await pool.query(`
      INSERT INTO rooms (type, price, vacancy, image) VALUES
      ('Single Room', 6000, 2, 'room1.png'),
      ('Double Sharing', 4500, 4, 'room2.png'),
      ('Triple Sharing', 3500, 6, 'room3.png'),
      ('4-Bed Sharing', 3000, 3, 'room4.png'),
      ('5-Bed Sharing', 2500, 5, 'room5.png')
      ON CONFLICT DO NOTHING
    `);
    console.log('✅ Sample rooms inserted');

    // Insert default admin
    await pool.query(`
      INSERT INTO admins (username, password) VALUES ('admin', 'admin123')
      ON CONFLICT DO NOTHING
    `);
    console.log('✅ Default admin inserted');

    console.log('\n🎉 Database setup complete!');
  } catch (err) {
    console.error('❌ Error creating tables:', err.message);
  } finally {
    pool.end();
  }
}

checkTables();
