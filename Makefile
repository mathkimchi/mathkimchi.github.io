all:

build:
	trunk build --release --public-url generic-clicker-game/
	cp docs/index.html docs/404.html

# Yeah, technically is serve not watch
watch:
	trunk serve
