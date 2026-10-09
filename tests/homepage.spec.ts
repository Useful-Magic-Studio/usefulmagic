import { expect, test } from '@chromatic-com/playwright'

test('Homepage', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(
    'Useful Magic Studio | Human-Friendly Systems & AI Upgrades',
  )
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Helping Growing Businesses Work Better',
    }),
  ).toBeVisible()
})
