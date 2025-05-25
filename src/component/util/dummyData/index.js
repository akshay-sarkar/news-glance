// Import all category-specific dummy data
import headlinesData from './headlinesData';
import businessData from './businessData';
import technologyData from './technologyData';
import sportsData from './sportsData';
import entertainmentData from './entertainmentData';
import scienceData from './scienceData';
import healthData from './healthData';

// Export all dummy data organized by category
export const dummyDataByCategory = {
  headlines: headlinesData,
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  entertainment: entertainmentData,
  science: scienceData,
  health: healthData
};

// Function to get dummy data for a specific category
export const getDummyDataForCategory = (category) => {
  const normalizedCategory = category.toLowerCase();
  
  // Map category names to match the data structure
  const categoryMap = {
    'headlines': 'headlines',
    'business': 'business',
    'technology': 'technology',
    'sports': 'sports',
    'entertainment': 'entertainment',
    'science': 'science',
    'health': 'health'
  };

  const mappedCategory = categoryMap[normalizedCategory];
  
  if (mappedCategory && dummyDataByCategory[mappedCategory]) {
    return dummyDataByCategory[mappedCategory];
  }
  
  // Default to headlines if category not found
  return dummyDataByCategory.headlines;
};

// Function to get all available categories
export const getAvailableCategories = () => {
  return Object.keys(dummyDataByCategory);
};

// Export individual category data for direct imports
export {
  headlinesData,
  businessData,
  technologyData,
  sportsData,
  entertainmentData,
  scienceData,
  healthData
};

// Default export for backwards compatibility
export default dummyDataByCategory;
