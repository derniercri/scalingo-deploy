# Contributing

## Drafting a release

```sh
# Build the action
yarn prepare

# Add the files to git
git add .

# Bump the version
yarn version --patch|minor|major

# Push with tags
git push origin main --tags
```
