all:

build:
	trunk build --release
	cp docs/index.html docs/404.html
	cp res/favicon.ico docs/favicon.ico

# Yeah, technically is serve not watch
watch:
	trunk serve
