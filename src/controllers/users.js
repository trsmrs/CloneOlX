
import usersModel from '../models/users'
import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'

const get = async (req, res) => {
    await dbConnect()
    const users = await usersModel.find()
    res.status(200).json({ success: true, users })
}


const post = async (req, res) => {
    const {
        name,
        email,
        passw
    } = req.body

    await dbConnect()

    const passwCrypto = await crypto(passw)

    const user = new usersModel({
        name,
        email,
        passw: passwCrypto,
    })

    user.save()
    res.status(201).json({ success: true })

}

export {
    get,
    post
}