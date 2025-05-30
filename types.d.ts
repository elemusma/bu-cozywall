declare global {
  interface Window {
    grecaptcha?: ReCaptchaV3; // 👈 make it optional
  }

  interface ReCaptchaV3 {
    execute(siteKey: string, options: { action: string }): Promise<string>;
  }
}

export {};
