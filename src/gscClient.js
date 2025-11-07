import { google } from 'googleapis';
import fs from 'fs';

import { formatGSCRow, sortByMetric, limitResults } from './utils.js';

export async function getGSCTrendingData({
  keyFile,
  siteUrl,
  startDate,
  endDate,
  limit = 10,
  metric = 'clicks'
} = {}) {
  if (!keyFile || !fs.existsSync(keyFile)) {
    throw new Error('Service Account key file not found. Provide a valid keyFile path.');
  }
  if (!siteUrl) {
    throw new Error('siteUrl is required (e.g. https://example.com/).');
  }
  if (!startDate || !endDate) {
    throw new Error('startDate and endDate are required in YYYY-MM-DD format.');
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const client = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: client });

  const request = {
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: limit,
      orderBy: [{ fieldName: 'clicks', sortOrder: 'descending' }],
    },
  };

  const res = await searchconsole.searchanalytics.query(request);
  const rows = res.data.rows || [];

  let data = rows.map(formatGSCRow);
  data = sortByMetric(data, metric);
  data = limitResults(data, limit);

  return data;
}
