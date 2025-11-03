#!/bin/bash

echo "🚀 FinalSwap Deployment Readiness Check"
echo "========================================"
echo ""

# Check if vercel.json files exist
echo "✓ Checking configuration files..."
if [ -f "frontend/vercel.json" ]; then
    echo "  ✓ frontend/vercel.json exists"
else
    echo "  ✗ frontend/vercel.json missing"
fi

if [ -f "admin/vercel.json" ]; then
    echo "  ✓ admin/vercel.json exists"
else
    echo "  ✗ admin/vercel.json missing"
fi

if [ -f "backend/vercel.json" ]; then
    echo "  ✓ backend/vercel.json exists"
else
    echo "  ✗ backend/vercel.json missing"
fi

echo ""
echo "✓ Checking package.json files..."
if [ -f "frontend/package.json" ]; then
    echo "  ✓ frontend/package.json exists"
else
    echo "  ✗ frontend/package.json missing"
fi

if [ -f "admin/package.json" ]; then
    echo "  ✓ admin/package.json exists"
else
    echo "  ✗ admin/package.json missing"
fi

if [ -f "backend/package.json" ]; then
    echo "  ✓ backend/package.json exists"
else
    echo "  ✗ backend/package.json missing"
fi

echo ""
echo "✓ Testing builds locally..."
echo ""

# Test frontend build
echo "📦 Testing frontend build..."
cd frontend
if npm run build > /dev/null 2>&1; then
    echo "  ✓ Frontend builds successfully"
else
    echo "  ✗ Frontend build failed - check for errors"
fi
cd ..

# Test admin build
echo "📦 Testing admin build..."
cd admin
if npm run build > /dev/null 2>&1; then
    echo "  ✓ Admin builds successfully"
else
    echo "  ✗ Admin build failed - check for errors"
fi
cd ..

echo ""
echo "========================================"
echo "📋 Next Steps:"
echo "1. Review DEPLOYMENT.md for detailed instructions"
echo "2. Set up environment variables in Vercel dashboard"
echo "3. Deploy each project separately on Vercel"
echo "4. Update API URLs after backend deployment"
echo ""
echo "Need help? Check DEPLOYMENT.md"