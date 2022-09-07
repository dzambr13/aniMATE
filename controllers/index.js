const Pics = require('../models/pics')
const Account = require('../models/account')

const createAccount = async (req, res) => {
  try {
    const account = await new Account(req.body)
    await account.save()
    return res.status(201).json({
      account
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
