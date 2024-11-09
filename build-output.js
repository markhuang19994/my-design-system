import {register} from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
    excludeParentKeys: true,
});

const cssCommonOptions = {
    outputReferences: true,
    outputReferenceFallbacks: true,
};
const sd = new StyleDictionary({
    source: ['tokens/**/*.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
        css: {
            transformGroup: 'tokens-studio',
            transforms: ['name/kebab'],
            buildPath: 'build/css/',
            prefix: 'ilc',
            files: [
                {
                    destination: 'variables.css',
                    format: 'css/variables',
                    options: {
                        ...cssCommonOptions
                    }
                },
                {
                    destination: 'variables.scss',
                    format: 'scss/map-deep',
                    options: {
                        ...cssCommonOptions
                    }
                },
                {
                    destination: 'variables-map.scss',
                    format: 'scss/map-deep',
                    options: {
                        ...cssCommonOptions
                    }
                },
            ],
        },
    },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
