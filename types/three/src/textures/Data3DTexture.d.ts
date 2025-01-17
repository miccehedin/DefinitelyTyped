import { Texture } from './Texture';
import { TextureFilter, Wrapping } from '../constants';

export class Data3DTexture extends Texture {
    constructor(data: BufferSource, width: number, height: number, depth: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: Wrapping;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isData3DTexture: true;
}
