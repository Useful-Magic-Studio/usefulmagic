import type { ChromaticConfig } from '@chromatic-com/playwright'
import { loadEnvConfig } from '@next/env'
import { defineConfig, devices } from '@playwright/test'

// Gives tests SITE_PASSWORD from .env.local without printing it.
// Existing environment variables (CI secrets) are left as-is.
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== 'production')

const LOCAL_BASE_URL = 'http://127.0.0.1:3000'
const externalBaseURL = process.env.PLAYWRIGHT_TEST_BASE_URL
const vercelBypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET

export default defineConfig<ChromaticConfig>({
  testDir: 'tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // Retries would archive duplicate Chromatic snapshots.
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: externalBaseURL || LOCAL_BASE_URL,
    viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure',
    prefersReducedMotion: 'reduce',
    ...(vercelBypassSecret && {
      extraHTTPHeaders: {
        'x-vercel-protection-bypass': vercelBypassSecret,
        'x-vercel-set-bypass-cookie': 'true',
      },
    }),
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
  ],
  // When PLAYWRIGHT_TEST_BASE_URL is set (e.g. a Vercel preview), test against it instead.
  webServer: externalBaseURL
    ? undefined
    : {
        command: 'npm run dev',
        url: LOCAL_BASE_URL,
        timeout: 120_000,
        reuseExistingServer: !process.env.CI,
      },
})