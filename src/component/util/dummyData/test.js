// Test script to verify dummy data functionality
import { getDummyDataForCategory, getAvailableCategories } from './index';

// Test function to verify all categories have data
const testDummyData = () => {
  console.log('🧪 Testing Dummy Data Implementation...\n');
  
  const categories = getAvailableCategories();
  console.log('📋 Available categories:', categories);
  
  categories.forEach(category => {
    const data = getDummyDataForCategory(category);
    console.log(`\n📰 Category: ${category.toUpperCase()}`);
    console.log(`   Status: ${data.status}`);
    console.log(`   Total Results: ${data.totalResults}`);
    console.log(`   Articles Count: ${data.articles.length}`);
    
    if (data.articles.length > 0) {
      const firstArticle = data.articles[0];
      console.log(`   Sample Article: "${firstArticle.title.substring(0, 50)}..."`);
      console.log(`   Source: ${firstArticle.source.name}`);
      console.log(`   Author: ${firstArticle.author || 'N/A'}`);
      console.log(`   Published: ${firstArticle.publishedAt}`);
      console.log(`   Has Image: ${firstArticle.urlToImage ? 'Yes' : 'No'}`);
    }
  });
  
  // Test edge cases
  console.log('\n🔍 Testing Edge Cases:');
  
  // Test invalid category
  const invalidData = getDummyDataForCategory('invalid-category');
  console.log(`   Invalid category fallback: ${invalidData.articles.length} articles (should use headlines)`);
  
  // Test case sensitivity
  const upperCaseData = getDummyDataForCategory('TECHNOLOGY');
  console.log(`   Uppercase category: ${upperCaseData.articles.length} articles`);
  
  // Test empty category
  const emptyData = getDummyDataForCategory('');
  console.log(`   Empty category: ${emptyData.articles.length} articles (should use headlines)`);
  
  console.log('\n✅ Dummy Data Test Complete!');
};

// Export for use in other files
export default testDummyData;

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment
  console.log('Running dummy data test in browser...');
  testDummyData();
} else if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  console.log('Dummy data test module loaded');
}
