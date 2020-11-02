package cz.martindobias.burgerbilder

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BurgerBuilderApplication

fun main(args: Array<String>) {
	runApplication<BurgerBuilderApplication>(*args)
}
