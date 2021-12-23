import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0xa7DE0872D31Aaa7B95e7027eC34270339a320591'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Little Red Book',
        description: 'This NFT will give you access to LmaoDAO!',
        image: readFileSync('scripts/assets/book.png'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
