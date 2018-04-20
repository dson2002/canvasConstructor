import filters from './lib/filters';

export const {
	blur,
	brightness,
	convolute,
	darkness,
	grayscale,
	greyscale,
	invert,
	invertedThreshold,
	invertGrayscale,
	invertGreyscale,
	myOldFriend,
	sepia,
	sharpen,
	silhouette,
	threshold
} = filters;

export { default as Canvas } from './lib/canvas';
