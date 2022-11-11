/* eslint-disable no-undef */
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
/**
 * These are needed for reaflow visuaisation library
 * https://github.com/reaviz/reaflow/issues/79
 */
import { ResizeObserver } from "@juggle/resize-observer";

window.ResizeObserver = ResizeObserver;
Element.prototype.scrollTo = jest.fn();
