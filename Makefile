all:
# empty on purpose

# is also used in the workflow
build:
	trunk build --release
	cp dist/index.html dist/404.html

# Yeah, technically is serve not watch
watch:
	trunk serve

# runs locally
run:
	make build
	cd dist ; python3 -m http.server 8080
