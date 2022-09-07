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

const createPics = async (req, res) => {
  try {
    const pic = await new Pics(req.body)
    await pic.save()
    return res.status(201).json({
      pic
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPics = async (req, res) => {
  try {
    const picture = await Pics.find()
    return res.status(200).json({ picture })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPicsById = async (req, res) => {
  try {
    const { id } = req.params
    const pic = await Pics.findById(id)
    if (pic) {
      return res.status(200).json({ pic })
    }
    return res.status(404).send('Pic with ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePics = async (req, res) => {
  try {
    const pic = await Pics.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(pic)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePics = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pics.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Pic deleted')
    }
    throw new Error('Pic not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createAccount,
  createPics,
  getAllPics,
  getPicsById,
  updatePics,
  deletePics
}
