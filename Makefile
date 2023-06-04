serve:
	# Necessary to add force-polling when on WSL. Got it from https://talk.jekyllrb.com/t/missing-auto-regeneration-watch/5651
	bundle exec jekyll serve --watch --force-polling --livereload

copy:
	# Copy content from main branch for local testing purposes
	git restore -s main -- _blog _data images
