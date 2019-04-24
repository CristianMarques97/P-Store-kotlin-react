package br.com.NewPStore.Store.errorResponse.response

import org.springframework.http.HttpStatus

class ErrorResponse {

    // Error Message model

    var status_code : Int = 0
    var status: HttpStatus? = null
    var message: String = ""
}