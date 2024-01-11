[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-100-brightgreen)
![Static Badge](https://img.shields.io/badge/release-1.0.1-blue)
[![test](https://github.com/airporting/ebics-parser/actions/workflows/test.yml/badge.svg)](https://github.com/airporting/ebics-parser/actions/workflows/test.yml)

# middy-algolia

Injects AlgoliaSearch into AWS Lambda context.

```javascript
import algoliaMiddleware from '@airporting/middy-algolia';

middy(yourHandler)
  .use(
    algoliaMiddleware({
      appId: 'ALGOLIA_APP_ID',
      apiKey: 'ALGOLIA_ADMIN_KEY',
    })
  );
```

## Usage

```javascript
export default async (params, { algolia }) => {
  const index = algolia.initIndex('indexName');
};
```
