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
        val OK = 200
        val CONFLICT = 409
        val NOT_FOUND = 404
        val NO_CONTENT = 204
        val BAD_REQUEST = 400
        val INTERNAL_SERVER_ERROR = 500

        val SQL_ERR_01 = "Usuário ou senha inválidos"
        val REQUEST_ERR_01 = "Por Favor inserir o e-mail e a senha"
        val REQUEST_ERR_02 = "Ouve um erro no serviço, tente novamente mais tarde"

    }

}
