all:
# empty on purpose

build:
	trunk build --release
	cp docs/index.html docs/404.html

# Yeah, technically is serve not watch
watch:
	trunk serve

run:
	make build
	cd docs ; python3 -m http.server 8080
