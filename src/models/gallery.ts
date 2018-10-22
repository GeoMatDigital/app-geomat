/**
 * Interface of a single gallery slide
 */
export interface gallery {

  /**
   * image_file formats
   */
  image_file: {
    large: string,
    medium: string,
    small: string,
    thumbnail: string,
    original: string
  },
}
