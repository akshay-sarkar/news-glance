# CI/CD Setup for News Glance

This document explains the GitHub Actions CI/CD pipeline setup for deployment to GitHub Pages from the `gh-pages` branch.

## Overview

The project uses a **branch-based deployment strategy** where:
- Development happens on `master`, `main`, or `develop` branches
- Tests and builds run automatically on pushes to development branches
- Deployment only happens when code is promoted to the `gh-pages` branch
- GitHub Pages serves content from the `gh-pages` branch

## Workflow Files

### 1. `deploy-from-gh-pages.yml` (Main Deployment)
**Location:** `.github/workflows/deploy-from-gh-pages.yml`

This workflow deploys to GitHub Pages when code is pushed to the `gh-pages` branch:
- **Triggers:** Push to `gh-pages` branch only
- **Actions:** Tests → Build → Deploy to GitHub Pages
- **Features:** Uses GitHub's native Pages deployment action

### 2. `test-and-build.yml` (Development)
**Location:** `.github/workflows/test-and-build.yml`

Runs on development branches for quality assurance:
- **Triggers:** Push to `master`, `main`, `develop` branches and PRs
- **Actions:** Tests → Build → Upload artifacts
- **Features:** No deployment, only validation and artifact creation

### 3. `promote-to-gh-pages.yml` (Manual Promotion)
**Location:** `.github/workflows/promote-to-gh-pages.yml`

Manual workflow to promote code from development branches to `gh-pages`:
- **Triggers:** Manual trigger only (workflow_dispatch)
- **Actions:** Checkout source → Test → Build → Promote to gh-pages
- **Features:** Allows controlled promotion of specific branches

## Setup Instructions

### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. GitHub Actions should be enabled by default for public repositories

### Step 2: Configure GitHub Pages
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The deployment will be triggered by the `deploy-from-gh-pages.yml` workflow

### Step 3: Repository Secrets (if needed)
No additional secrets are required. The workflows use the built-in `GITHUB_TOKEN`.

### Step 4: Initial Setup
```bash
git add .github/
git commit -m "Add new CI/CD workflows for gh-pages deployment"
git push origin master
```

## Workflow Triggers

### Automatic Triggers
- **Push to master/main/develop:** Triggers test and build (no deployment)
- **Pull Request to master/main:** Triggers testing and building
- **Push to gh-pages:** Triggers deployment to GitHub Pages

### Manual Triggers
- **Promote to gh-pages:** Go to Actions tab → "Promote to gh-pages" → "Run workflow"
- **Manual deployment:** Use the deployment script: `./scripts/deploy.sh`

## Monitoring Deployments

### GitHub Actions Tab
- View workflow runs and their status
- See detailed logs for each step
- Monitor build and deployment progress

### GitHub Pages
- Check deployment status in repository Settings → Pages
- View deployment history and logs

## Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Review build logs in Actions tab

2. **Tests Fail:**
   - Ensure all tests pass locally
   - Check for missing test files or configurations

3. **Deployment Fails:**
   - Verify GitHub Pages is enabled
   - Check repository permissions
   - Ensure build artifacts are created correctly

### Debug Steps
1. Check the Actions tab for detailed error logs
2. Verify package.json scripts work locally
3. Test the build process manually: `npm run build`
4. Check GitHub Pages settings in repository

## Deployment Methods

### Method 1: Using the Deployment Script (Recommended)
```bash
# Interactive mode
./scripts/deploy.sh

# Direct CI/CD deployment
./scripts/deploy.sh ci-cd

# Or using npm script
npm run deploy:ci-cd
```

### Method 2: Manual GitHub Actions
1. Go to GitHub Actions tab
2. Select "Promote to gh-pages" workflow
3. Click "Run workflow"
4. Choose source branch and commit message
5. Click "Run workflow" button

### Method 3: Manual Git Commands
```bash
# Switch to gh-pages branch
git checkout gh-pages

# Merge or copy from master
git merge master  # or git checkout master -- .

# Build and commit
npm ci && npm run build
git add .
git commit -m "Deploy from master"
git push origin gh-pages
```

### Method 4: Traditional gh-pages (Fallback)
```bash
# Traditional method (still works)
npm run deploy
```

## Benefits of New CI/CD Setup

1. **Controlled Deployment:** Only deploy when ready by promoting to gh-pages
2. **Quality Assurance:** Tests run before deployment on all branches
3. **Consistent Builds:** Same environment every time
4. **Rollback Capability:** Easy to revert gh-pages branch
5. **Team Collaboration:** Clear separation between development and deployment
6. **Flexibility:** Multiple deployment methods available

## Migration from Manual Deployment

If you were previously using `npm run deploy` manually:

1. The new workflows replace this manual step
2. You can still use manual deployment as a backup
3. Remove or comment out the gh-pages dependency if not needed
4. Update your development workflow to rely on automatic deployment

## Next Steps

1. **Add Tests:** Enhance the test suite for better coverage
2. **Add Linting:** Configure ESLint for code quality
3. **Environment Variables:** Add production environment variables if needed
4. **Notifications:** Set up Slack/email notifications for deployment status
5. **Staging Environment:** Create a staging branch for testing

## Commands Reference

```bash
# View workflow status
gh workflow list

# Run workflow manually
gh workflow run ci-cd.yml

# View recent runs
gh run list

# View specific run details
gh run view <run-id>
```

For more information, see [GitHub Actions Documentation](https://docs.github.com/en/actions).
