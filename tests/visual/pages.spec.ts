import { expect, test } from '@chromatic-com/playwright'
import { openPage, seedRejectedConsent } from './helpers'

test.describe('pages with rejected consent', () => {
  test.beforeEach(async ({ page }) => {
    await seedRejectedConsent(page)
  })

  test('homepage renders the hero', async ({ page }) => {
    await openPage(page, '/')
    await expect(
      page.getByRole('heading', { level: 1, name: 'Helping Growing Businesses Work Better' }),
    ).toBeVisible()
    await expect(page.getByRole('dialog', { name: 'Privacy choices' })).toHaveCount(0)
  })

  test('privacy page renders the policy', async ({ page }) => {
    await openPage(page, '/privacy')
    await expect(page.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeVisible()
    await expect(page.getByRole('dialog', { name: 'Privacy choices' })).toHaveCount(0)
  })
})

test('login page is reachable without auth', async ({ page }) => {
  await seedRejectedConsent(page)
  await page.goto('/login')
  await expect(page).toHaveURL(/\/login$/)
  await expect(page.getByRole('heading', { level: 1, name: 'This site is under wraps' })).toBeVisible()
  await expect(page.getByLabel('Password')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Enter' })).toBeVisible()
})

test('consent banner shows when no choice is stored', async ({ page }) => {
  // /login is never redirected by the password gate, so this shot stays stable
  // whether or not the rest of the site is locked.
  await page.goto('/login')
  const banner = page.getByRole('dialog', { name: 'Privacy choices' })
  await expect(banner).toBeVisible()
  await expect(banner.getByRole('heading', { name: 'Privacy choices' })).toBeVisible()
})
