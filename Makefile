install:
	npm install

start:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

.PHONY: test