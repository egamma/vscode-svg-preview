import { StyleConfiguration } from './StyleConfiguration';

/**
 * State of the preview panel.
 */
export interface PreviewState {
  /**
   * File system path of the currently previewed file.
   */
  fsPath?: string
  /**
   * Content of the currently previewed file.
   */
  content?: string
  /**
   * The Pointer offset during panning.
   */
  pointerOffset?: {
    x: number
    y: number
  }
  /**
   * The zoom.
   */
  zoom?: number
  /**
   * Custom styles for the preview.
   */
  style?: StyleConfiguration
}
