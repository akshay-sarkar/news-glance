#!/bin/bash

# News Glance Deployment Script
# This script helps with manual deployment and CI/CD management

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if we're in the right directory
check_directory() {
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root directory."
        exit 1
    fi
    
    if [ ! -d ".github/workflows" ]; then
        print_warning ".github/workflows directory not found. CI/CD may not be set up."
    fi
}

# Function to check git status
check_git_status() {
    if [ -n "$(git status --porcelain)" ]; then
        print_warning "You have uncommitted changes. Consider committing them first."
        git status --short
        echo
        read -p "Do you want to continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Deployment cancelled."
            exit 1
        fi
    fi
}

# Function to run tests
run_tests() {
    print_status "Running tests..."
    if npm test -- --ci --watchAll=false --passWithNoTests; then
        print_success "Tests passed!"
    else
        print_error "Tests failed. Deployment cancelled."
        exit 1
    fi
}

# Function to build the application
build_app() {
    print_status "Building application..."
    if npm run build; then
        print_success "Build completed successfully!"
    else
        print_error "Build failed. Deployment cancelled."
        exit 1
    fi
}

# Function to deploy manually using gh-pages
manual_deploy() {
    print_status "Deploying manually using gh-pages..."
    if npm run deploy; then
        print_success "Manual deployment completed!"
        print_status "Your app should be available at: https://akshay-sarkar.github.io/news-glance/"
    else
        print_error "Manual deployment failed."
        exit 1
    fi
}

# Function to trigger GitHub Actions deployment
trigger_ci_cd() {
    current_branch=$(git branch --show-current)
    
    if [ "$current_branch" != "master" ] && [ "$current_branch" != "main" ]; then
        print_warning "You are on branch '$current_branch'. CI/CD deployment only triggers from master/main branch."
        read -p "Do you want to switch to master branch? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git checkout master
            git pull origin master
        else
            print_error "Deployment cancelled. Please switch to master/main branch for CI/CD deployment."
            exit 1
        fi
    fi
    
    print_status "Pushing to $current_branch to trigger CI/CD..."
    git push origin $current_branch
    print_success "Push completed! CI/CD pipeline should start automatically."
    print_status "Check the progress at: https://github.com/akshay-sarkar/news-glance/actions"
}

# Function to show help
show_help() {
    echo "News Glance Deployment Script"
    echo
    echo "Usage: $0 [OPTION]"
    echo
    echo "Options:"
    echo "  manual    Deploy manually using gh-pages (npm run deploy)"
    echo "  ci-cd     Push to master/main to trigger CI/CD pipeline"
    echo "  test      Run tests only"
    echo "  build     Build the application only"
    echo "  help      Show this help message"
    echo
    echo "If no option is provided, you'll be prompted to choose."
}

# Main script logic
main() {
    echo "🚀 News Glance Deployment Script"
    echo "================================="
    echo
    
    check_directory
    
    case "${1:-}" in
        "manual")
            check_git_status
            run_tests
            build_app
            manual_deploy
            ;;
        "ci-cd")
            check_git_status
            run_tests
            trigger_ci_cd
            ;;
        "test")
            run_tests
            ;;
        "build")
            build_app
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        "")
            # Interactive mode
            echo "Choose deployment method:"
            echo "1) Manual deployment (gh-pages)"
            echo "2) CI/CD deployment (push to master)"
            echo "3) Run tests only"
            echo "4) Build only"
            echo "5) Exit"
            echo
            read -p "Enter your choice (1-5): " choice
            
            case $choice in
                1)
                    check_git_status
                    run_tests
                    build_app
                    manual_deploy
                    ;;
                2)
                    check_git_status
                    run_tests
                    trigger_ci_cd
                    ;;
                3)
                    run_tests
                    ;;
                4)
                    build_app
                    ;;
                5)
                    print_status "Goodbye!"
                    exit 0
                    ;;
                *)
                    print_error "Invalid choice. Please run '$0 help' for usage information."
                    exit 1
                    ;;
            esac
            ;;
        *)
            print_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run the main function with all arguments
main "$@"
