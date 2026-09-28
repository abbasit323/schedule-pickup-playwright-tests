import { expect, test } from '@playwright/test';
import pickupFixture from './fixtures/pickup.json';

const pickupApiPath = process.env.PICKUP_API_PATH ?? '/api/pickups';

test('POST pickup API returns 200 and a created pickup body', async ({ request }) => {
  let responseBody: Record<string, unknown>;

  await test.step('Create a pickup through the backend API', async () => {
    const response = await request.post(pickupApiPath, { data: pickupFixture.valid });

    await test.step('Verify the success status code', async () => {
      expect(response.status()).toBe(200);
    });

    responseBody = await response.json() as Record<string, unknown>;
  });

  await test.step('Verify the response contains the submitted pickup data', async () => {
    expect(responseBody).toMatchObject({
      address: pickupFixture.valid.address,
      pickupType: pickupFixture.valid.pickupType
    });
  });
});
