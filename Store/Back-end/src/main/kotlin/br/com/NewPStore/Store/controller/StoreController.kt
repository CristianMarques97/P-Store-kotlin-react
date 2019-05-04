package br.com.NewPStore.Store.controller

import br.com.NewPStore.Store.dto.Customer
import br.com.NewPStore.Store.errorResponse.exception.HttpReturnException
import br.com.NewPStore.Store.repository.CustomerRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/PStore")
@CrossOrigin("localhost:3000", "*")
class StoreController {

    val log = LoggerFactory.getLogger(StoreController::class.java)

    @Autowired
    private val customerRepository: CustomerRepository? = null

    @PostMapping("/customer/create/new/")
    fun createUser(@RequestBody user: Customer): Customer? {
        log.info("Request: New Customer (${user.email})")
        user.senha = CipherText.crypt(user.senha)

        return customerRepository?.save(user)
    }

    @PostMapping("/customer/login/")
    fun userLogin(@RequestBody user: Customer): Customer? {
        log.info("Request: Customer Login (${user.email})")

        user.senha = CipherText.crypt(user.senha)
        try {
            var userReceived = customerRepository?.findByEmailAndSenha(user.email, user.senha)
            userReceived?.senha = ""
            return userReceived
        } catch (e: EmptyResultDataAccessException) {
            log.info(e.printStackTrace().toString())
            throw HttpReturnException(HttpReturnException.NOT_FOUND, HttpStatus.NOT_FOUND, HttpReturnException.SQL_ERR_01)
        } catch(e: Exception) {
            log.info(e.printStackTrace().toString())
            throw HttpReturnException(HttpReturnException.INTERNAL_SERVER_ERROR, HttpStatus.INTERNAL_SERVER_ERROR,HttpReturnException.REQUEST_ERR_02)
        }
    }

    @PutMapping("/customer/edit/info")
    fun editUser(@RequestBody user: Customer): Customer? {
        log.info("Request: Edit Customer (${user.email})")
        try {
            if(user.email.isNullOrEmpty() || user.senha.isNullOrEmpty())
                throw Exception(HttpReturnException.REQUEST_ERR_01)

            user.senha = CipherText.crypt(user.senha)

            customerRepository?.findByIdAndSenha(user.id, user.senha)
            var userReceived = customerRepository?.save(user)
            userReceived?.senha = ""
            return userReceived

        }catch (e: EmptyResultDataAccessException) {
            log.info(e.printStackTrace().toString())
            throw HttpReturnException(HttpReturnException.NOT_FOUND, HttpStatus.NOT_FOUND, HttpReturnException.SQL_ERR_01)
        }
        catch(e: Exception) {
            log.info(e.printStackTrace().toString())
            throw e.message?.let { HttpReturnException(HttpReturnException.BAD_REQUEST,HttpStatus.BAD_REQUEST, it) }!!
        }
    }


}

class CipherText {

    companion object {
        fun crypt(password: String): String {
            val cipher = password.toByteArray(Charsets.UTF_8)
            for (i in cipher.indices) {
                cipher[i] = ((cipher[i] + 13 - cipher.size - 4) + 15).toByte()
            }

            return String(cipher, Charsets.UTF_8)
        }

        fun decrypt(password: String): String {
            val plain = password.toByteArray()
            for (i in plain.indices) {
                plain[i] = ((plain[i] - 13 + plain.size + 4) + 15).toByte()
            }
            return String(plain, Charsets.UTF_8)
        }
    }
}

