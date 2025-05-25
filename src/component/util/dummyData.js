import businessData from './dummyData/businessData';
import technologyData from './dummyData/technologyData';
import sportsData from './dummyData/sportsData';
import entertainmentData from './dummyData/entertainmentData';
import scienceData from './dummyData/scienceData';
import healthData from './dummyData/healthData';
import headlinesData from './dummyData/headlinesData';

const dummyData = {
  headlines: headlinesData,
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  entertainment: entertainmentData,
  science: scienceData,
  health: healthData
};

/**
 * Returns dummy data for the specified category
 * @param {string} category - The news category to retrieve
 * @returns {Object} The dummy data for the requested category
 */
export const getDummyDataForCategory = (category) => {
  // Handle null/undefined input
  if (!category) {
    return headlinesData;
  }
  
  // Normalize category name to lowercase
  const normalizedCategory = category.toLowerCase();
  
  // Return the requested category data or headlines as fallback
  return dummyData[normalizedCategory] || headlinesData;
};

export default dummyData;
