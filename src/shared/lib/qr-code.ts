import QRCode from 'qrcode';

type QrCodeOptions = {
  readonly dark?: string;
  readonly light?: string;
};

export const renderQrCodeSvg = async (value: string, options: QrCodeOptions = {}): Promise<string> =>
  QRCode.toString(value, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 0,
    color: {
      dark: options.dark ?? '#0f131d',
      light: options.light ?? '#00000000',
    },
  });
