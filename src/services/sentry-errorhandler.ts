import { IonicErrorHandler } from 'ionic-angular';
import Raven from 'raven-js';
// https://gonehybrid.com/how-to-log-errors-in-your-ionic-2-app-with-sentry/
Raven
.config('https://99933c836cb140ab860f3f8f01439334@sentry.io/224009',
{
  release: '1.0.0',
  dataCallback: data => {

      if (data.culprit) {
          data.culprit = data.culprit.substring(data.culprit.lastIndexOf('/'));
      }

      var stacktrace = data.stacktrace ||
                       data.exception &&
                       data.exception.values[0].stacktrace;

      if (stacktrace) {
          stacktrace.frames.forEach(function (frame) {
              frame.filename = frame.filename.substring(frame.filename.lastIndexOf('/'));
          });
      }
  }
})
.install();

/**
 * Extends IonicErrorhandler
 * Sends errors to sentry.io for debugging-tracking
 */
export class SentryErrorHandler extends IonicErrorHandler {
  /**
   * Handle recently thrown errors
   * @param error
   */
  handleError(error) {
      super.handleError(error);

      try {
        Raven.captureException(error.originalError || error);
      }
      catch(e) {
        console.error(e);
      }
  }
}
