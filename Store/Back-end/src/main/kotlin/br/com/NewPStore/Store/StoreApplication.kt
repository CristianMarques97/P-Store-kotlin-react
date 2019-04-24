package br.com.NewPStore.Store

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class StoreApplication {
	companion object {
		@JvmStatic fun main(args: Array<String>) {
			SpringApplication.run(StoreApplication::class.java, *args)
		}
	}

	class AddressProperties{
		companion object {
			var host = "localhost:8080"
		}
	}
}