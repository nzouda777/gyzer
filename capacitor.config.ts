import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'gyzer',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
