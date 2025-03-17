all:
# empty on purpose

# is also used in the workflow
build:
	trunk build --release
	cp docs/index.html docs/404.html

# Yeah, technically is serve not watch
watch:
	trunk serve

# runs locally
run:
	make build
	cd docs ; python3 -m http.server 8080
