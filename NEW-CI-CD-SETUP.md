# New CI/CD Setup - gh-pages Branch Deployment

## 🎯 **Overview**

The CI/CD pipeline has been **recreated** to use a **branch-based deployment strategy** where:

- **Development** happens on `master`, `main`, or `develop` branches
- **Testing & Building** runs automatically on development branches  
- **Deployment** only happens when code is promoted to the `gh-pages` branch
- **GitHub Pages** serves content from the `gh-pages` branch

## 🔄 **New Workflow Strategy**

### **1. Development Workflow**
```
master/main/develop → Test & Build → Artifacts (No Deployment)
```

### **2. Deployment Workflow**  
```
gh-pages → Test → Build → Deploy to GitHub Pages
```

### **3. Promotion Workflow**
```
master → Manual Promotion → gh-pages → Auto Deploy
```

## 📁 **Workflow Files**

### **Active Workflows**

1. **`deploy-from-gh-pages.yml`** - Main deployment workflow
   - **Triggers:** Push to `gh-pages` branch
   - **Actions:** Test → Build → Deploy to GitHub Pages
   - **Purpose:** Handles actual deployment

2. **`test-and-build.yml`** - Development workflow
   - **Triggers:** Push to `master`/`main`/`develop`, PRs
   - **Actions:** Test → Build → Upload artifacts
   - **Purpose:** Quality assurance, no deployment

3. **`promote-to-gh-pages.yml`** - Manual promotion workflow
   - **Triggers:** Manual trigger only
   - **Actions:** Checkout → Test → Build → Promote to gh-pages
   - **Purpose:** Controlled promotion from dev to production

### **Disabled Workflows**
- `ci-cd.yml.disabled` - Old comprehensive pipeline
- `deploy.yml.disabled` - Old direct deployment
- `deploy-gh-pages.yml.disabled` - Old gh-pages deployment

## 🚀 **Deployment Methods**

### **Method 1: Enhanced Deployment Script (Recommended)**
```bash
# Interactive deployment
./scripts/deploy.sh

# Direct CI/CD promotion
./scripts/deploy.sh ci-cd

# Using npm script
npm run deploy:ci-cd
```

### **Method 2: Manual GitHub Actions**
1. Go to **GitHub Actions** tab
2. Select **"Promote to gh-pages"** workflow
3. Click **"Run workflow"**
4. Choose source branch and commit message
5. Click **"Run workflow"** button

### **Method 3: Traditional Method (Still Works)**
```bash
npm run deploy
```

### **Method 4: Manual Git Commands**
```bash
# Create/switch to gh-pages
git checkout gh-pages || git checkout --orphan gh-pages

# Copy from master
git checkout master -- .

# Build and deploy
npm ci && npm run build
git add .
git commit -m "Deploy from master - $(date)"
git push origin gh-pages
```

## ⚙️ **Setup Instructions**

### **Step 1: Repository is Ready**
✅ All workflow files are already committed and active

### **Step 2: GitHub Pages Configuration**
**Current Status:** GitHub Pages is set to "Deploy from a branch" (gh-pages)

**Options:**
- **Keep current setup:** Works with traditional deployment (npm run deploy)
- **Switch to GitHub Actions:** Enable our custom `deploy-from-gh-pages.yml` workflow

**To switch to GitHub Actions:**
1. Go to repository **Settings → Pages**
2. Change Source from **"Deploy from a branch"** to **"GitHub Actions"**
3. This will enable our custom deployment workflow

### **Step 3: Test the Setup**
```bash
# Test development workflow (should only run tests/build)
git push origin master

# Test deployment (choose one method)
./scripts/deploy.sh ci-cd
# OR
npm run deploy
```

## 📊 **Current Status**

### **✅ What's Working**
- ✅ Development branches run tests and builds automatically
- ✅ gh-pages branch deployments work (using GitHub's native deployment)
- ✅ Traditional `npm run deploy` still works
- ✅ Enhanced deployment script with multiple options
- ✅ Manual promotion workflow available

### **⚠️ Pending Configuration**
- ⚠️ GitHub Pages source needs to be changed to "GitHub Actions" to use our custom workflow
- ⚠️ Currently using GitHub's native "Deploy from a branch" method

## 🎯 **Benefits of New Setup**

### **🔒 Controlled Deployment**
- Deploy only when ready by promoting to gh-pages
- No accidental deployments from development branches
- Clear separation between development and production

### **🧪 Quality Assurance**
- Tests run on all branches before any deployment
- Build artifacts available for inspection
- Failed tests prevent deployment

### **🔄 Flexibility**
- Multiple deployment methods available
- Easy rollback by reverting gh-pages branch
- Support for both automated and manual workflows

### **👥 Team Collaboration**
- Clear workflow for team members
- No need for deployment permissions for all developers
- Consistent deployment process

## 🛠️ **Usage Examples**

### **Daily Development**
```bash
# Work on features
git checkout master
git pull origin master
# Make changes...
git add .
git commit -m "Add new feature"
git push origin master  # Triggers test & build only
```

### **Deployment**
```bash
# When ready to deploy
./scripts/deploy.sh ci-cd
# OR use GitHub Actions manually
# OR use traditional: npm run deploy
```

### **Rollback**
```bash
# Rollback to previous version
git checkout gh-pages
git reset --hard HEAD~1  # Go back one commit
git push origin gh-pages --force
```

## 🔧 **Troubleshooting**

### **Deployment Not Working?**
1. Check if tests are passing on master branch
2. Verify gh-pages branch exists and has content
3. Check GitHub Pages settings in repository
4. Review GitHub Actions logs for errors

### **Want to Use Custom Workflow?**
1. Change GitHub Pages source to "GitHub Actions"
2. Push to gh-pages branch to trigger custom workflow
3. Monitor in GitHub Actions tab

### **Need Help?**
- Check GitHub Actions tab for workflow status
- Review deployment script logs
- Verify package.json scripts are working
- Test build locally: `npm run build`

## 📝 **Next Steps**

1. **Test the current setup** with your preferred deployment method
2. **Decide on GitHub Pages source** (branch vs GitHub Actions)
3. **Train team members** on the new workflow
4. **Monitor deployments** and adjust as needed
5. **Consider adding** staging environment for testing

---

**The new CI/CD setup provides better control, quality assurance, and flexibility while maintaining compatibility with existing deployment methods!** 🚀
