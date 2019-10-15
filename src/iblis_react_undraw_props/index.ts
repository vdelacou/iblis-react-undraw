export interface IIblisReactUndrawProps {
  /**
   * The main color (it's the one you can change at top of https://undraw.co/illustrations)
   * @default #6c63ff
   */
  primarycolor?: string;
  /**
   * Mostly the color use for background or the important part of the illustrations
   * @default #3f3d56
   */
  accentcolor?: string;
  /**
   * In most case it's use for hair color, but it can affect other parts
   * @default #2f2e41
   */
  haircolor?: string;
  /**
   * In most case it's use for skni color, but it can affect other parts
   * @default #ffb9b9
   */
  skincolor?: string;
  /**
   * custom class for svg
   */
  class?: string;
}
