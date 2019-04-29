package br.com.NewPStore.Store.errorResponse.exception

import org.springframework.http.HttpStatus

class HttpReturnException(status_code: Int, status: HttpStatus, message: String) : Exception() {

    override fun hashCode(): Int {
        return super.hashCode()
    }

    var status_code = status_code
    var status = status

    override var message = message

    companion object {
        final val OK = 200
        final val CONFLICT = 409
        final val NOT_FOUND = 404
        final val NO_CONTENT = 204
        final val INTERNAL_SERVER_ERROR = 500

        final val SQL_ERR_01 = "Usuário ou senha inválidos"
        final val REQUEST_ERR_01 = "Por Favor inserir o e-mail e a senha"

    }

}
