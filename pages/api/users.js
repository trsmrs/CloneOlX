import dbConnect from '../../src/utils/dbConnect'
import { crypto } from '../../src/utils/password'
import usersModel from '../../src/models/users'

const users = async (req, res) =>{
    const {method} = req

    switch(method){
      case 'GET':
       await dbConnect()
        res.status(200).json({ success: true})
      break

      case 'POST':
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

        res.status(201).json({success: true})
    }
}

export default users