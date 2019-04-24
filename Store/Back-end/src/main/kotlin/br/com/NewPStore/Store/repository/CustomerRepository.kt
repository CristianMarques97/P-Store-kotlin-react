package br.com.NewPStore.Store.repository

import br.com.NewPStore.Store.dto.Customer
import org.springframework.data.jpa.repository.JpaRepository


interface CustomerRepository: JpaRepository<Customer, Integer> {

    fun findByEmailAndSenha(email: String, senha: String): Customer

    fun findByIdAndSenha(id: Int, senha: String): Customer

}