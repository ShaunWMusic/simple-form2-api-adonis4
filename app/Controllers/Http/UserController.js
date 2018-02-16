'use strict'
const User = use('App/Models/User')


class UserController {


async store({ request, response, params: { id }}) {
  try {
    const { data: { attributes }} = request.post()
    const { email, password } = attributes
    const user = await User.create({ email, password })

    response.status(200).json({
      message: 'Your user account is now created!',
      data: {
        attributes: user
      }
    })


  } catch (e) {

  } finally {

  }
}


}

module.exports = UserController
