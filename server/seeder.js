const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/UserModel')
const Order = require('./models/OrderModel')
const Product = require('./models/ProductModel')
const connectDb = require('./config/config')

dotenv.config()
connectDb()

const importData = async () => {
  try {
    // await Order.deleteMany()
    // await User.deleteMany()
    await Product.deleteMany()

    // const createUser = await User.insertMany(users)
    // const adminUser = createUser[0]._id
    const sampleData = products.map((product) => {
      // return { ...product, user: adminUser }
      return {...product}
    })
    await Product.insertMany(sampleData)
    console.log('Data imported!!!')

    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const dataDestroy = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()
    console.log('Data Destroy')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  dataDestroy()
} else {
  importData()
}
