keep = .git acsweb.ucsd.edu node_modules src .gitignore CNAME Makefile package-lock.json README.md

clean: $(keep)
	find . -maxdepth 1 $(addprefix $"-not -name $",$(keep)) -exec rm -r "{}" \;

