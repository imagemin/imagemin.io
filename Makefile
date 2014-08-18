duo = ./node_modules/.bin/duo
imagemin = ./node_modules/.bin/imagemin
myth = ./node_modules/.bin/myth

#
# Default task
#

default: build

#
# Tasks
#

server: node_modules bin/server
	@node --harmony bin/server

#
# Targets
#

build: node_modules index.html
	@mkdir -p build
	@$(MAKE) build/index.html
	@$(MAKE) build/index.js
	@$(MAKE) build/index.css

build/index.html: node_modules index.html
	@cp -f index.html build/index.html

build/index.js: node_modules index.js
	@$(duo) index.js > build/index.js

build/index.css: node_modules index.css
	@$(duo) index.css | $(myth) > build/index.css

images: node_modules images
	@$(imagemin) *.{gif.jpg,png,svg}

node_modules: package.json
	@npm install
	@touch node_modules

#
# Phony targets
#

.PHONY: server
