/**
 * Format API response rows from Google Search Console
 * into a clean, readable object.
 */
export function formatGSCRow(row) {
  return {
    url: row.keys[0],
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    ctr: +(row.ctr * 100).toFixed(2),
    position: +row.position.toFixed(1),
  };
}

/**
 * Sort data by clicks (or any other metric)
 */
export function sortByMetric(data, metric = 'clicks') {
  return data.sort((a, b) => b[metric] - a[metric]);
}

/**
 * Limit number of results
 */
export function limitResults(data, limit = 10) {
  return data.slice(0, limit);
}

/**
 * Convert dates to YYYY-MM-DD format (for API request)
 */
export function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}
