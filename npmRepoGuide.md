# Guide to Using GitHub NPM Repository

## Prerequisites
Before you begin, ensure you are a contributor to the target project.

## Step-by-Step Instructions

### Step 1: Create a Personal Access Token
1. Visit https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Enable the `read:packages` permission
4. Save your generated token securely

### Step 2: Configure Project Settings
Add either `.yarnrc.yml` or `.npmrc` to your project root.

Assuming:
- Project repository: https://github.com/ylchen1215/xxx-design-token
- Generated token: `$TOKEN`

#### Option 1: Using Yarn (`.yarnrc.yml`)
```yaml
npmRegistryServer: "https://registry.yarnpkg.com"
npmScopes:
  ylchen1215:
    npmAuthToken: "$TOKEN"
    npmAlwaysAuth: true
    npmRegistryServer: "https://npm.pkg.github.com"
```

#### Option 2: Using Yarn (`.npmrc`)
```text
always-auth=true
@ylchen1215:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=$TOKEN
registry=https://registry.npmjs.org/
```
