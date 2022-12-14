import pathSettings from 'settings/paths';

export const listingContextSerializer = {
  name: 'ListingContextSerializer',
  methods: {
    splashUrl: listing =>
      listing.splash
        ? `/${pathSettings.staticAssetPath}/${listing.splash}`
        : `/${pathSettings.staticAssetPath}/laptop-view.jpg`,
  },
  attributes: [
    ['name', 'listingName'],
    ['description', 'listingDescription'],
    ['splashUrl', 'listingImage'],
    ['sublinks', 'listingSublinks'],
    ['seoDescription', 'pageDescription'],
  ],
};
