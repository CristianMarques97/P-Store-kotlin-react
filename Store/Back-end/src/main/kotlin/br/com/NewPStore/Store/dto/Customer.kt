package br.com.NewPStore.Store.dto

import java.io.Serializable
import java.sql.Date
import javax.persistence.*

@Entity
@Table(name = "customers")
class Customer : Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    var id: Int = 0

    @Column(columnDefinition = "text")
    var name: String = ""

    @Column(columnDefinition = "text")
    var lastname: String = ""

    @Column(unique = true, columnDefinition = "text")
    var email: String = ""

    @Column(columnDefinition = "text")
    var senha: String = ""

    @Column(unique = true, columnDefinition = "text")
    var CPF: String = ""

    @Column(columnDefinition = "date")
    var data_nascimento : Date? = null

    @Column(columnDefinition = "text")
    var profile_icon: String = ""

    @Column(columnDefinition = "boolean")
    var adm: Boolean = false

    @Column(columnDefinition = "text")
    var CEP: String = ""

    @Column(columnDefinition = "text")
    var logradouro: String =""

    @Column(columnDefinition = "text")
    var numero: String = ""

    @Column(columnDefinition = "text")
    var bairro: String = ""

    @Column(columnDefinition = "text")
    var cidade: String = ""

    @Column(columnDefinition = "text")
    var estado : String = ""

    @Column(columnDefinition = "text")
    var complemento: String = ""

    companion object {
        private const val serialVersionUID = 1L
    }

}