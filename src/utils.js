/**
 * Utility helpers for GSC Trending Plus
 */

/**
 * Format a single Search Console API row into a clean object.
 * @param {object} row
 */
export function formatGSCRow(row) {
  const keys = Array.isArray(row.keys) ? row.keys : [row.keys];
  return {
    url: keys[0] || '',
    clicks: Number(row.clicks || 0),
    impressions: Number(row.impressions || 0),
    ctr: Number(((row.ctr || 0) * 100).toFixed(2)),
    position: Number((row.position || 0).toFixed(2))
  };
}

/**
 * Sort array of result objects by metric (descending)
 * @param {Array} data
 * @param {string} metric
 */
export function sortByMetric(data, metric = 'clicks') {
  return data.sort((a, b) => (b[metric] || 0) - (a[metric] || 0));
}

/**
 * Limit results to `limit` items
 */
export function limitResults(data, limit = 10) {
  return data.slice(0, limit);
}

/**
 * Ensure a date string is in YYYY-MM-DD format.
 * Accepts Date objects or strings.
 */
export function formatDate(input) {
  if (!input) return '';
  const d = (input instanceof Date) ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().split('T')[0];
}
