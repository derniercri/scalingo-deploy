# Deploy on Scalingo

This action will allow you to deploy your app to Scalingo.
It was created to work around the limitation of Scalingo to deploy only after the CI is valid.

> ⚠️ This action works only for Scalingo apps that are linked to GitHub

## Getting started

```yaml
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-22.04

    steps:
    - name: Scalingo Deploy
      uses: derniercri/scalingo-deploy@0.0.24
      with:
        # Required
        token: ${{ secrets.SCALINGO_TOKEN }}
        appName: YOUR_SCALINGO_APP_NAME
        # Optional
        apiUrl: "The API URL endpoint, defaults to https://api.osc-fr1.scalingo.com. The list is available here: https://developers.scalingo.com/index#global-information"
        branch: The branch to deploy, defaults to the current branch
```
