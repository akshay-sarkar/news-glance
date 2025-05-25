# CI/CD Setup for News Glance

This document explains the GitHub Actions CI/CD pipeline setup for automatic deployment to GitHub Pages.

## Overview

The project now includes automated CI/CD workflows that will:
- Run tests and linting on every push and pull request
- Build the application
- Deploy to GitHub Pages automatically when changes are pushed to the main/master branch

## Workflow Files

### 1. `ci-cd.yml` (Recommended)
**Location:** `.github/workflows/ci-cd.yml`

This is the main CI/CD pipeline that includes:
- **Test Stage:** Runs linting and tests
- **Build Stage:** Creates production build
- **Deploy Stage:** Deploys to GitHub Pages (only on master/main branch)

**Features:**
- Runs on Node.js 18.x
- Caches npm dependencies for faster builds
- Uploads test coverage reports
- Only deploys from master/main branch
- Uses GitHub's native Pages deployment action

### 2. `deploy.yml` (Alternative)
**Location:** `.github/workflows/deploy.yml`

A simpler workflow focused on deployment:
- Builds and deploys on every push to master/main
- Uses GitHub's native Pages deployment

### 3. `deploy-gh-pages.yml` (Legacy)
**Location:** `.github/workflows/deploy-gh-pages.yml`

Uses the traditional gh-pages branch approach:
- Similar to the manual `npm run deploy` command
- Deploys to gh-pages branch
- Good fallback option

## Setup Instructions

### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. GitHub Actions should be enabled by default for public repositories

### Step 2: Configure GitHub Pages
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions" (recommended) or "Deploy from a branch" if using gh-pages workflow
3. If using branch deployment, select "gh-pages" branch

### Step 3: Repository Secrets (if needed)
No additional secrets are required for basic deployment. The workflows use the built-in `GITHUB_TOKEN`.

### Step 4: Commit and Push
```bash
git add .github/
git commit -m "Add CI/CD workflows for GitHub Pages deployment"
git push origin master
```

## Workflow Triggers

### Automatic Triggers
- **Push to master/main:** Triggers full CI/CD pipeline
- **Pull Request:** Triggers testing and building (no deployment)
- **Push to develop:** Triggers testing only

### Manual Triggers
- Go to Actions tab → Select workflow → Click "Run workflow"

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

## Benefits of CI/CD

1. **Automated Deployment:** No need to manually run `npm run deploy`
2. **Quality Assurance:** Tests run before deployment
3. **Consistent Builds:** Same environment every time
4. **Rollback Capability:** Easy to revert to previous versions
5. **Team Collaboration:** All team members can contribute without deployment access

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
