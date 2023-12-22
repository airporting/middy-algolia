import { randGitShortSha } from '@ngneat/falso';
import algoliaMiddleware from './index.js';

describe('algoliaMiddleware', () => {
  it('basic', async () => {
    const handler = {
      context: {},
    };

    const middleware = algoliaMiddleware({
      appId: randGitShortSha(),
      apiKey: randGitShortSha(),
    });
    await middleware.before(handler);

    expect(handler.context.algolia).toBeDefined();
  });
});
