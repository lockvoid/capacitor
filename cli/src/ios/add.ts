import c from '../colors';
import { runTask } from '../common';
import type { Config } from '../definitions';
import { extractTemplatePackage } from '../util/template';

export const defaultIOSTemplatePackageSPM = '@capacitor/ios-spm-template';
export const defaultIOSTemplatePackageCocoapods =
  '@capacitor/ios-cocoapods-template';

export async function addIOS(config: Config): Promise<void> {
  await runTask(
    `Adding native Xcode project in ${c.strong(config.ios.platformDir)}`,
    () => {
      return extractTemplatePackage(
        config.cli.assets.ios.platformTemplateArchiveAbs,
        config.ios.platformDirAbs,
      );
    },
  );
}
