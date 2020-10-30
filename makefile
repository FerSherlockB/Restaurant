help: ## This help message
	@echo "$$( grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/##//' )"

up:   ## Start up all containers defined in the docker-compose
	docker-compose -p restaurant up -d --build
	
down: ## Shut down all containers defined in the docker-compose and remove volumes as well
	docker-compose down -v