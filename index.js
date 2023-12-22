import algoliasearch from 'algoliasearch';

const algoliaMiddleware = ({ appId, apiKey }) => {
  async function before(request) {
    const { context } = request;

    context.algolia = algoliasearch(appId, apiKey);
  }

  return {
    before,
  };
};

export default algoliaMiddleware;
