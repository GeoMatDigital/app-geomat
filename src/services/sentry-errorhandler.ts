import { IonicErrorHandler } from 'ionic-angular';
import Raven from 'raven-js';
import { ENV } from '@app/env';
// https://gonehybrid.com/how-to-log-errors-in-your-ionic-2-app-with-sentry/

if (ENV.mode === 'prod') {
  Raven
    .config(ENV.GEOMAT_SENTRY_URL,
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
          stacktrace.frames.forEach(function(frame) {
            frame.filename = frame.filename.substring(frame.filename.lastIndexOf('/'));
          });
        }
      }
    })
    .install();
}

/**
 * Extends IonicErrorhandler
 * Sends errors to Sentry for debugging-tracking
 */
export class SentryErrorHandler extends IonicErrorHandler {
  /**
   * Handle recently thrown errors
   * @param error
   */
  handleError(error) {
    super.handleError(error);

    if (ENV.mode === 'prod') {
      try {
        Raven.captureException(error.originalError || error);
      }
      catch (e) {
        console.error(e);
      }
    }
  }
}
