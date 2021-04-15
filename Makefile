keep = .git acsweb.ucsd.edu node_modules src .gitignore CNAME Makefile package-lock.json package.json README.md

.PHONY: serve
serve:
	hugo server -s src/

.PHONY: build
build:
	hugo --gc --minify -s src/

.PHONY: local
local:
	hugo --gc --minify -s src/ -b http://127.0.0.1:8080/
	live-server

.PHONY: clean
clean: $(keep) clean-gen
	find . -mindepth 1 -maxdepth 1 $(addprefix $"-not -name $",$(keep)) -exec rm -r "{}" \;

.PHONY: clean-gen
clean-gen:
	rm -r src/resources/_gen/assets

