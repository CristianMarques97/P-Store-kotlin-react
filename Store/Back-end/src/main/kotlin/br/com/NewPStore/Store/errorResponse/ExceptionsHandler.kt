package br.com.NewPStore.Store.errorResponse

import br.com.NewPStore.Store.errorResponse.exception.HttpReturnException
import br.com.NewPStore.Store.errorResponse.response.ErrorResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ExceptionsHandler: ResponseEntityExceptionHandler() {

    @ExceptionHandler(HttpReturnException::class)
    final fun handleErrorReturn(e: HttpReturnException, request: WebRequest): ResponseEntity<ErrorResponse> {
        var res = ErrorResponse()
        res.message = e.message
        res.status = e.status
        res.status_code = e.status_code

        return ResponseEntity<ErrorResponse>(res,e.status)
    }
}