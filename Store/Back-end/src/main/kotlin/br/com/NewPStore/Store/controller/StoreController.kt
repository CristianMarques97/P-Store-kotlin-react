package br.com.NewPStore.Store.controller

import br.com.NewPStore.Store.dto.Customer
import br.com.NewPStore.Store.errorResponse.exception.HttpReturnException
import br.com.NewPStore.Store.repository.CustomerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/PStore")
@CrossOrigin("localhost:3000", "*")
class StoreController {

    @Autowired
    private val customerRepository: CustomerRepository? = null

    @PostMapping("/customer/create/new/")
    fun createUser(@RequestBody user: Customer): Customer? {

        user.senha = CipherText.crypt(user.senha)

        return customerRepository?.save(user)
    }

    @PostMapping("/customer/login/")
    fun userLogin(@RequestBody user: Customer): Customer? {

        user.senha = CipherText.crypt(user.senha)
        try {
            var userReceived = customerRepository?.findByEmailAndSenha(user.email, user.senha)
            userReceived?.senha = ""
            return userReceived
        } catch (e: EmptyResultDataAccessException) {
            throw HttpReturnException(404, HttpStatus.NOT_FOUND, HttpReturnException.SQL_ERR_01)
        }
    }

    @PutMapping("/customer/edit/info")
    fun editUser(@RequestBody user: Customer): Customer? {
        try {
            if(user.email.isNullOrEmpty() || user.senha.isNullOrEmpty())
                throw Exception(HttpReturnException.REQUEST_ERR_01)

            user.senha = CipherText.crypt(user.senha)

            customerRepository?.findByIdAndSenha(user.id, user.senha)
            var userReceived = customerRepository?.save(user)
            userReceived?.senha = ""
            return userReceived

        }catch (e: EmptyResultDataAccessException) {
            throw HttpReturnException(404, HttpStatus.NOT_FOUND, HttpReturnException.SQL_ERR_01)
        }
        catch(e: Exception) {
            throw e.message?.let { HttpReturnException(400,HttpStatus.BAD_REQUEST, it) }!!
        }
    }


}

class CipherText {

    companion object {
        fun crypt(password: String): String {
            var cipher = password.toByteArray(Charsets.UTF_8)
            for (i in cipher.indices) {
                cipher[i] = ((cipher[i] + 13 - cipher.size - 4) + 15).toByte()
            }

            return String(cipher, Charsets.UTF_8)
        }

        fun decrypt(password: String): String {
            var plain = password.toByteArray()
            for (i in plain.indices) {
                plain[i] = ((plain[i] - 13 + plain.size + 4) + 15).toByte()
            }
            return String(plain, Charsets.UTF_8)
        }
    }
}

