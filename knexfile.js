module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///galvanize_bank'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
