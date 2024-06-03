const sequelize = require(`./database`)

async function testDatabaseConnection() {
    try {
        await sequelize.authenticate()
        console.log(`Database connection has been established successfully.`)
    } catch (error) {
        console.error(`Unable to connect to the database:`, error)
    }
}

testDatabaseConnection()