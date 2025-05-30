export const getRecaptchaToken = async (action: string): Promise<string> => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    throw new Error("Missing reCAPTCHA site key");
  }

  const waitForGrecaptcha = (): Promise<ReCaptchaV3> =>
    new Promise((resolve, reject) => {
      let retries = 0;
      const interval = setInterval(() => {
        if (typeof window !== "undefined" && window.grecaptcha?.execute) {
          clearInterval(interval);
          resolve(window.grecaptcha);
        } else if (retries > 20) {
          clearInterval(interval);
          reject(new Error("reCAPTCHA not yet loaded"));
        }
        retries++;
      }, 300);
    });

  const grecaptcha = await waitForGrecaptcha();
  return grecaptcha.execute(siteKey, { action });
};
