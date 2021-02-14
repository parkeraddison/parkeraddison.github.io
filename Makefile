keep = .git acsweb.ucsd.edu node_modules src .gitignore CNAME Makefile package-lock.json README.md

.PHONY: serve
serve:
	hugo server -s src/

.PHONY: build
build:
	hugo -s src/

.PHONY: clean
clean: $(keep)
	find . -maxdepth 1 $(addprefix $"-not -name $",$(keep)) -exec rm -r "{}" \;

