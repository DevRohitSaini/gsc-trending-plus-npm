import { google } from 'googleapis';
import fs from 'fs';

export async function getGSCTrendingData({
  keyFile,
  siteUrl,
  startDate,
  endDate,
  limit = 10
}) {
  if (!fs.existsSync(keyFile)) {
    throw new Error('Service Account key file not found');
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: limit,
      orderBy: [{ fieldName: 'clicks', sortOrder: 'descending' }],
    },
  });

  const rows = res.data.rows || [];
  return rows.map(r => ({
    url: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: parseFloat((r.ctr * 100).toFixed(2)),
    position: parseFloat(r.position.toFixed(2)),
  }));
}
