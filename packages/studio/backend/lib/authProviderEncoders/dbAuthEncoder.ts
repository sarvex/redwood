import CryptoJS from 'crypto-js'
import { v4 as uuidv4 } from 'uuid'

import { SESSION_SECRET } from '../envars'

export const getDBAuthHeader = async (userId?: string) => {
  if (!userId) {
    throw new Error('Require an unique id to generate session cookie')
  }

  if (!SESSION_SECRET) {
    throw new Error(
      'dbAuth requires a SESSION_SECRET environment variable that is used to encrypt session cookies. Use `yarn rw g secret` to create one, then add to your `.env` file. DO NOT check this variable in your version control system!!'
    )
  }

  const cookie = CryptoJS.AES.encrypt(
    // ids muts be integers, so can they be uuids or cuids?
    // why this may not work on MongoDB?
    JSON.stringify({ id: parseInt(userId) }) + ';' + uuidv4(),
    SESSION_SECRET
  ).toString()

  return {
    authProvider: 'dbAuth',
    cookie: `session=${cookie}`,
    authorization: `Bearer ${userId}`,
  }
}
