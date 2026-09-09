CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_slug TEXT NOT NULL,
  referrer TEXT,
  campaign TEXT,
  clicked_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_product ON affiliate_clicks(product_slug);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_time ON affiliate_clicks(clicked_at);
