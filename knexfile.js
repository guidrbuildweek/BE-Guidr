// Update with your config settings.
const localPgConnection = {
  host: 'localhost',
  database:'dev',
  user: 'student',
  password: 'hired!'
}
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    usNullAsDefault:true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory:'./data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory:'./data/seeds'
    }
  }

};
