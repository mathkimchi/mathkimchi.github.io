all:

build:
	trunk build --release
	cp docs/index.html docs/404.html

# Yeah, technically is serve not watch
watch:
	trunk serve
