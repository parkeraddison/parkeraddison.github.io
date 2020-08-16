
## Notes:

User Pages need to be built from the master branch -- making things a bit messy in here. The files that should remain in the root directory if I need to delete the build (e.g. to clean files) are:
```
- .git/
- acsweb.ucsd.edu/
- node_modules/
- src/
- .gitignore
- CNAME
- Makefile
- package-lock.json
- README.md
```

Run `make clean` to wipe out everything except for these files (could be dangerous!).
 